class ExchangePage {

  constructor() {
    if (!this.itti) {
      ExchangePage.prototype.itti = new IttiContract();
    }
    if (!this.usdt) {
      ExchangePage.prototype.usdt = new UsdtContract();
    }
  }

  _setAccount(account) {
    let newAccount = typeof account === 'string' ? account : '';
    if (newAccount.length > 13) {
      newAccount = newAccount.slice(0, 6) + ' ***** ' + newAccount.slice(-4);
    }
    $('#input-account').val(newAccount);
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

  // 换购
  async exchange() {
    const btnClassname = 'exchange-confirm-btn';
    if (Utils.isBtnLoading(btnClassname)) {
      return;
    }
    Utils.setBtnLoading(btnClassname);
    try {
      const usdtAmount = $('#input-amount').val();
      await this.itti.exchangeByUsdt(usdtAmount);
    } catch (err) {
      if (err && err.code != 4001) {
        new CommonPage().showError(err.message || 'Subscription failed')
        console.error('getQualification err:', err)
      }
    } finally {
      Utils.resetBtnLoading(btnClassname);
    }
  }
}

function initEvents() {
  const btnExchange = $('.exchange-confirm-btn');

  const exchange = new ExchangePage();
  exchange.connect();

  btnExchange.on('click', function () {
    exchange.exchange();
  });
}

$(document).ready(function () {
  initEvents();
});
