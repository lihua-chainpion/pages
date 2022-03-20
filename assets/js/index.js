class IndexPage {
  constructor() {
    if (!this.itti) {
      IndexPage.prototype.itti = new IttiContract();
    }
  }

  _setAccount(account) {
    let newAccount = typeof account === 'string' ? account : '';
    if (newAccount.length > 13) {
      newAccount = newAccount.slice(0, 6) + '...' + newAccount.slice(-4);
    }
    const actNot = $('.connect-wallet');
    const actOk = $('.wallet-account');
    actOk.text(newAccount);
    actNot.remove();
    actOk.show();
  }

  connect() {
    const _this = this;
    BaseContract.connectWallet()
        .then(res => {
          _this._setAccount(ethereum.selectedAddress);
        })
        .catch(err => {
          if (err.code != 4001) {
            new CommonPage().showError(err.message);
            console.error('连接钱包失败:', err);
          }
        });
  }

  /**
   * 购买认购资格
   * @param inviter 邀请人账户地址
   * @return {Promise<void>}
   */
  async getQualification(inviter) {
    const btnClassname = 'buy-eligibility-btn'
    if (Utils.isBtnLoading(btnClassname)) {
      return;
    }
    Utils.setBtnLoading(btnClassname);
    try {
      const res = await this.itti.qualify(inviter);
      res !== false && new CommonPage().showSuccess('You are a DAO General now!');
    } catch (err) {
      if (err && err.receipt && err.receipt.status === false) {
        const {browserBaseUrl} = getConfig();
        const errMsg = `
          The subscription failed, please check the transaction details from the blockchain browser
          <a href="${browserBaseUrl + err.receipt.transactionHash}" target="_blank"> ${err.receipt.transactionHash} </a>
        `
        new CommonPage().showError(errMsg || 'Subscription failed');
      } else {
        new CommonPage().showError(err.message || 'Subscription failed');
      }
      console.error('getQualification err:', err)
    } finally {
      Utils.resetBtnLoading(btnClassname);
    }
  }

  inviteNow() {
    const inviteLink = this.itti.inviteLinks.home;
    Utils.copyText('invite-now-btn', inviteLink).then(res => {
      // new CommonPage().showSuccess(inviteLink, 'Invitation link copied!');
    });
  }
}

async function initHomePage() {
  const btnConnect = $('.connect-wallet');
  const btnBuy = $('.buy-eligibility-btn');
  const btnInvite = $('.invite-now-btn');

  const indexPage = new IndexPage();
  indexPage.connect();

  const isWhite = await indexPage.itti.isWhite();
  if (isWhite) {
    $('.invitation-section').show();
    new CommonPage().setInvitationLink('home');
  }

  btnConnect.on('click', function () {
    indexPage.connect();
  });
  btnBuy.on('click', function () {
    const {inviter} = Utils.parseSearch();
    indexPage.getQualification(inviter);
  });
  btnInvite.on('click', function () {
    indexPage.inviteNow();
  });
}

$(document).ready(function () {
  initHomePage();
});
