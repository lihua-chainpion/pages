(function importLibs() {
  const bd = $('body')
  bd.append(`<script src="assets/libs/clipboard.min.js"></script>`);
})();

class DelegatePage {
  constructor() {
    if (!this.ittc) {
      DelegatePage.prototype.ittc = new IttcContract();
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
      await this.ittc.qualify(inviter);
    } catch (err) {
      new CommonPage().showError(err.message || 'Subscription failed')
      console.error('getQualification err:', err)
    } finally {
      Utils.resetBtnLoading(btnClassname);
    }
  }

  inviteNow() {
    const inviteLink = this.ittc.inviteLink;
    Utils.copyText('invite-now-btn', inviteLink).then(res => {
      new CommonPage().showSuccess(inviteLink, 'Invitation link copied!');
    });
  }
}

function initEvents() {
  const btnConnect = $('.connect-wallet');
  const btnBuy = $('.buy-eligibility-btn');
  const btnInvite = $('.invite-now-btn');

  const delegate = new DelegatePage();
  delegate.connect();

  btnConnect.on('click', function () {
    delegate.connect();
  });
  btnBuy.on('click', function () {
    const {inviter} = Utils.parseSearch();
    delegate.getQualification(inviter);
  });
  btnInvite.on('click', function () {
    delegate.inviteNow();
  })
}

$(document).ready(function () {
  initEvents();
});
