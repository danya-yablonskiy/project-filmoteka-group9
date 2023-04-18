(() => {
  const refs = {
    openModalText: document.querySelectorAll('[data-modal-team-open]'),
    closeModalBtn: document.querySelector('[data-modal-team-close]'),
    modal: document.querySelector('[data-modal-team]'),
  };

  refs.openModalText.forEach(txt => txt.addEventListener('click', openModal));
  refs.closeModalBtn.addEventListener('click', closeModal);

  function openModal() {
    document.body.classList.add('modal-open');
    refs.modal.classList.remove('is-hidden');
    document.addEventListener('keydown', onEscButtonPress);
    refs.modal.addEventListener('click', onBackdropClick);
  }

  function closeModal() {
    document.body.classList.remove('modal-open');
    refs.modal.classList.add('is-hidden');
    document.removeEventListener('keydown', onEscButtonPress);
    refs.modal.removeEventListener('click', onBackdropClick);
  }

  function onEscButtonPress(e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  }

  function onBackdropClick(e) {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  }
})();
