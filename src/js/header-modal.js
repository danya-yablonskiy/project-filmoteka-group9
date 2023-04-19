import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import Notiflix from 'notiflix';

const auth = document.querySelector('.login-button');
const headerModal = document.querySelector('[data-modal-header]');
const closeBtn = document.querySelector('[data-modal-header__close]');

const firebaseConfig = {
  apiKey: 'AIzaSyBTdydKLR31BfE93rPSLfsN7oAUyG8p96E',
  authDomain: 'test-b1d2f.firebaseapp.com',
  projectId: 'test-b1d2f',
  storageBucket: 'test-b1d2f.appspot.com',
  messagingSenderId: '322341860995',
  appId: '1:322341860995:web:28a6fa526199ccc4f94db6',
};

const app = initializeApp(firebaseConfig);
export const authFn = getAuth(app);

const userEmail = document.querySelector('#userEmail');
const userPassword = document.querySelector('#userPassword');
const authForm = document.querySelector('#authForm');
const secretContent = document.querySelector('#secretContent');
const signUpButton = document.querySelector('#signUpButton');
const signInButton = document.querySelector('#signInButton');
const signOutButton = document.querySelector('#signOutButton');
const btnLibrary = document.querySelector('.button-library');
const loginBtn = document.querySelector('.login-button');

secretContent.style.display = 'none';
btnLibrary.style.display = "none";
loginBtn.style.display = 'block';
signOutButton.style.display = 'none';

const userSignUp = async () => {
  const signUpEmail = userEmail.value;
  const signUpPassword = userPassword.value;
  createUserWithEmailAndPassword(authFn, signUpEmail, signUpPassword)
    .then(userCredential => {
      const user = userCredential.user;
      console.log(user);
      Notiflix.Notify.success('Your account has been created!');
      btnLibrary.style.display = "block";
    })
    .catch(() => {
      Notiflix.Notify.failure('Enter correct data!');
    });
};

const userSignIn = async () => {
  const signInEmail = userEmail.value;
  const signInPassword = userPassword.value;
  signInWithEmailAndPassword(authFn, signInEmail, signInPassword)
    .then(userCredential => {
        const user = userCredential.user;
        console.log(user);
      Notiflix.Notify.success('You have signed in successfully!');
      btnLibrary.style.display = "block";
    })
    .catch(error => {
       Notiflix.Notify.failure('A user with such data does not exist!');
    });
};

const checkAuthState = async () => {
  onAuthStateChanged(authFn, user => {
    if (user) {
      loginBtn.style.display = 'none';
      signOutButton.style.display = 'block';
      btnLibrary.style.display = "block";
      authForm.style.display = 'none';
      secretContent.style.display = 'block';
      
    } else {

      authForm.style.display = 'block';
      secretContent.style.display = 'none';
    }
  });
};

const userSignOut = async () => {
  await signOut(authFn);
  setTimeout(() => document.location.reload(), 550);
  
  
};

checkAuthState();

signUpButton.addEventListener('click', userSignUp);
signInButton.addEventListener('click', userSignIn);
signOutButton.addEventListener('click', userSignOut);

auth.addEventListener('click', onAuthBtnClick);
closeBtn.addEventListener('click', onCloseBtnClick);
headerModal.addEventListener('click', onBackdropClick);

function onAuthBtnClick() {
  headerModal.classList.remove('is-hidden');
}

function onCloseBtnClick() {
  headerModal.classList.add('is-hidden');
}

function onBackdropClick(e) {
  if (e.target === e.currentTarget) {
    onCloseBtnClick();
  }
}
