const loader = document.querySelector('.loader');

export default function displayLoader() {
    loader.classList.add('display');
}

export default function hideLoader() {
    loader.classList.remove('display');
}