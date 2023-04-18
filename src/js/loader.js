const loader = document.querySelector('.loader');

export function displayLoader() {
    loader.classList.add('display');
}

export function hideLoader() {
    loader.classList.remove('display');
}