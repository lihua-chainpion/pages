(function importLibs() {
  const bd = $('body')
  bd.append(`<script src="assets/config/abi/ittcAbi.js"></script>`);
  bd.append(`<script src="assets/config/abi/usdtAbi.js"></script>`);
  bd.append(`<script src="assets/config/config.js"></script>`);
  bd.append(`<script src="assets/js/contract.js"></script>`);
  bd.append(`<script src="assets/js/utils.js"></script>`);
})();

class CommonPage {
  setCopyrightYear() {
    $('.my-copyright-year').text(new Date().getFullYear());
  }

  appendModal() {
    $('body').append(`
      <!-- Modal -->
      <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="myModalLabel">Success!</h5>
            </div>
            <div class="modal-body" style="word-wrap: break-word;word-break: break-all;">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary close-my-modal" data-bs-dismiss="modal">Close</button>
<!--              <button type="button" class="btn btn-primary">Save changes</button>-->
            </div>
          </div>
        </div>
      </div>
    `);
    CommonPage.prototype.myModal = new bootstrap.Modal(document.getElementById('myModal'));
    const _this = this;
    $('.close-my-modal').click(function () {
      _this.myModal.hide();
    })
  }

  showSuccess(message, title) {
    if (!this.myModal) {
      this.appendModal();
    }
    $('#myModal #myModalLabel').text(title || 'Success!');
    $('#myModal .modal-body').text(message);
    this.myModal.show();
  }

  showError(errMessage, errTitle) {
    if (!this.myModal) {
      this.appendModal();
    }
    $('#myModal #myModalLabel').text(errTitle || 'Error!');
    $('#myModal .modal-body').text(errMessage);
    this.myModal.show();
  }
}

$(document).ready(function () {
  const commonPage = new CommonPage();
  commonPage.setCopyrightYear();
  ethereum && ethereum.on('accountsChanged', (accounts) => {
    window.location.reload();
  });
});