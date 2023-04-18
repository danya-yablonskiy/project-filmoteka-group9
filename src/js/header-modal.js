const logInBtn = document.querySelector('.login-button');
const headerModal = document.querySelector('[data-modal-header]');
const closeBtn = document.querySelector('[data-modal-header__close]');


logInBtn.addEventListener('click', onLogInBtnClick);
closeBtn.addEventListener('click', onCloseBtnClick);
headerModal.addEventListener('click', onBackdropClick);

function onLogInBtnClick(e) {
    headerModal.classList.remove('is-hidden');


}
function onCloseBtnClick(e){
    headerModal.classList.add('is-hidden');
}
 
function onBackdropClick(e) {
    if (e.target === e.currentTarget) {
        onCloseBtnClick();
    }
}