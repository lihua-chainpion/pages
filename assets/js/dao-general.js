class DaoGeneralPage {
  constructor() {
    if (!this.itti) {
      DaoGeneralPage.prototype.itti = new IttiContract();
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
      await this.itti.qualify(inviter);
      new CommonPage().showSuccess('You are a DAO General now!');
    } catch (err) {
      new CommonPage().showError(err.message || 'Subscription failed')
      console.error('getQualification err:', err)
    } finally {
      Utils.resetBtnLoading(btnClassname);
    }
  }

  inviteNow() {
    const inviteLink = this.itti.inviteLinks.dao;
    Utils.copyText('invite-now-btn', inviteLink).then(res => {
      // new CommonPage().showSuccess(inviteLink, 'Invitation link copied!');
    });
  }
}

async function initDaoGeneralPage() {
  const btnConnect = $('.connect-wallet');
  const btnBuy = $('.buy-eligibility-btn');
  const btnInvite = $('.invite-now-btn');

  const daoPage = new DaoGeneralPage();
  daoPage.connect();

  const isWhite = await daoPage.itti.isWhite();
  if (isWhite) {
    $('.not-show-in-white').attr('style', 'display: none !important');
    $('.only-show-in-white').show();
    $('.invitation-section').show();
    new CommonPage().setInvitationLink('dao');
  }

  btnConnect.on('click', function () {
    daoPage.connect();
  });
  btnBuy.on('click', function () {
    const {inviter} = Utils.parseSearch();
    daoPage.getQualification(inviter);
  });
  btnInvite.on('click', function () {
    daoPage.inviteNow();
  });
}

$(document).ready(function () {
  initDaoGeneralPage();
});
