(() => {
  const refs = {
    openModalText: document.querySelectorAll("[data-modal-team-open]"),
    closeModalBtn: document.querySelector("[data-modal-team-close]"),
    modal: document.querySelector("[data-modal-team]"),
     };

  refs.openModalText.forEach(txt=>txt.addEventListener("click", toggleModal));
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.modal.addEventListener("click", onBackdropClick);
  document.addEventListener('keydown', onEscButtonPress);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }

  function onEscButtonPress(e) {
    if (e.key === 'Escape') {
      toggleModal();
    }
  }
  
  function onBackdropClick(e) {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  }
})();