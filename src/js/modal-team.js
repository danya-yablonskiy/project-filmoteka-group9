(() => {
    const refs = {
      openModalText: document.querySelectorAll("[data-modal-team-open]"),
      closeModalBtn: document.querySelector("[data-modal-team-close]"),
      modal: document.querySelector("[data-modal-team]"),
    };
  
    refs.openModalText.forEach(txt=>txt.addEventListener("click", toggleModal));
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      document.body.classList.toggle("modal-open");
      refs.modal.classList.toggle("is-hidden");
    }
  })();