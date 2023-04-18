const scrollbtnToTop = document.querySelector('#scroll-to-the-top');

document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    if (this.scrollY > 100) {
      scrollbtnToTop.classList.add('show');
    } else {
      scrollbtnToTop.classList.remove('show');
    }
  });
});
