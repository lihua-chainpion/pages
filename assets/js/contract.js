const config = getConfig();

let _usdtContract = undefined;
const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

function _NewContract(jsonInterface, address) {
  return new web3.eth.Contract(jsonInterface, address);
}

class BaseContract {

  static async checkChain() {
    if (typeof window.ethereum === 'undefined') {
      return Promise.reject(new Error('You have not installed the wallet'));
    }
    const isUnlocked = await ethereum._metamask.isUnlocked();
    if (!isUnlocked) {
      return Promise.reject(new Error('MetaMask has been locked'));
    }
    // switch if not the right chain
    const {chainId} = config;
    if (ethereum.chainId != chainId) {
      return ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{
          chainId,
        }],
      });
    }
  }

  static async connectWallet() {
    try{
      await BaseContract.checkChain();
      return ethereum.request({
        method: 'eth_requestAccounts'
      });
    }catch(err){
      console.log('connect wallet err:', err);
      // return Promise.reject(new Error(`请切换到 ${config.chainName}`))
      return Promise.reject(err);
    }
  }
}

class UsdtContract extends BaseContract {
  constructor() {
    super();
    const {
      abi,
      address
    } = config.usdtContract;
    UsdtContract.prototype.contract = _NewContract(abi, address);
  }

  // approve
  async approve(spender, amount) {
    const spenderOk = validator.isEthereumAddress(spender + '');
    const amountOk = amount > 0;
    if (!spenderOk || !amountOk) {
      const errMsg = !spenderOk ? 'spender address format is incorrect' : 'Approving amount is wrong';
      return Promise.reject(new Error(errMsg))
    }
    return this.contract.methods.approve(spender, amount).send({
      from: ethereum.selectedAddress,
    });
  }
}

class IttiContract extends BaseContract {
  constructor() {
    super();
    const {
      abi,
      address
    } = config.ittiContract;
    IttiContract.prototype.contract = _NewContract(abi, address);
  }

  async getUsdtApprove(amount) {
    if (!_usdtContract) {
      _usdtContract = new UsdtContract();
    }
    const {address} = config.ittiContract;
    return _usdtContract.approve(address, amount);
  }

  // 认购白名单
  async qualify(inviter, onApproving, onApproved) {
    if (!validator.isEthereumAddress(inviter + '')) {
      return Promise.reject(new Error('The inviter account format is incorrect'));
    }
    if (!ethereum || !ethereum.selectedAddress) {
      return Promise.reject(new Error('Wallet not yet connected'));
    }
    if (inviter.toLowerCase() === ethereum.selectedAddress.toLowerCase()) {
      return Promise.reject(new Error('The inviter and the registered account cannot be the same'));
    }
    try{
      typeof onApproving === 'function' && onApproving();
      const fixedPrice = await this.contract.methods._fixedDelegatePrice().call();
      await this.getUsdtApprove(fixedPrice);
      typeof onApproved === 'function' && onApproved();
      await this.contract.methods.applyForDelegate(inviter).send({
        from: ethereum.selectedAddress,
      });
    }catch(err){
      console.error('ittiContract.qualify err:', err);
      if (err.code != 4001) {
        return Promise.reject(new Error('The subscription failed, please check the transaction details from the blockchain browser')); // 认购失败，请从区块链浏览器查看交易详情
      }
      return Promise.resolve(false);
    }
  }

  get inviteLinks() {
    const {homeInviteBaseUrl, daoInviteBaseUrl} = config.ittiContract;
    return {
      home: `${homeInviteBaseUrl}${ethereum.selectedAddress}`,
      dao: `${daoInviteBaseUrl}${ethereum.selectedAddress}`,
    };
  }

  async getPrice() {
    const n = await this.contract.methods._currentPrice_numerator().call({from: ethereum.selectedAddress});
    const m = await this.contract.methods._currentPrice_denominator().call({from: ethereum.selectedAddress});
    // console.log('n, m:', n, m);
    return n / m;
  }

  async isWhite() {
    return this.contract.methods.isWhite().call({from: ethereum.selectedAddress});
  }

  // 换购
  async exchangeByUsdt(usdtAmount, onApproving, onApproved) {
    const amountOk = usdtAmount > 0;
    if (!amountOk) {
      return Promise.reject(new Error('The USDT amount needs to be greater than 0'));
    }
    const amount = web3.utils.toWei(usdtAmount.toString(), 'ether');
    try{
      typeof onApproving === 'function' && onApproving();
      await this.getUsdtApprove(amount);
      typeof onApproved === 'function' && onApproved();
      await this.contract.methods.enchangeTokenWithUsdt(amount).send({
        from: ethereum.selectedAddress,
      });
    }catch(err){
      console.error('ittiContract.exchangeByUsdt err:', err);
      if (err.code == 4001) {
        return Promise.resolve(false);
      }
      if (err && err.message) {
        return Promise.reject(err);
      }
      return Promise.reject(new Error('The redemption failed, please check the transaction details from the blockchain browser'));
    }
  }
}
