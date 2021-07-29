'use strict';

const heroHeading = document.querySelector('.heading-hero');
const headerBtn = document.querySelector('.btn-header');
heroHeading.classList.add('js-loading');
headerBtn.classList.add('js-loading');

const showPage = function () {
  heroHeading.classList.remove('js-loading');
  headerBtn.classList.remove('js-loading');
  loadLazyImages();
};

const loadLazyImages = function () {
  document
    .querySelectorAll('.lazyload')
    .forEach(e => e.classList.remove('lazyload'));
};

window.addEventListener('load', showPage);

const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const btnMobileIcon = document.querySelector('.mobile-nav__icon');
const mobileIcon = document.querySelector('.mobile-icon');
const mobileMenu = document.querySelector('.mobile-nav__menu');

const smoothScrollLink = function (e) {
  const id = e.target.closest('a').getAttribute('href');
  document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
};

const toggleMobileMenu = function () {
  mobileIcon.classList.toggle('mobile-icon--animate');
  mobileMenu.classList.toggle('mobile-nav__menu--open');
};

document.querySelector('.nav').addEventListener('click', function (e) {
  e.preventDefault();
  if (
    e.target.classList.contains('nav__link') ||
    e.target.classList.contains('nav__logo') ||
    e.target.classList.contains('mobile-nav__link')
  ) {
    if (mobileMenu.classList.contains('mobile-nav__menu--open')) {
      toggleMobileMenu();
    }

    smoothScrollLink(e);
  }
});

headerBtn.addEventListener('click', function (e) {
  e.preventDefault();
  smoothScrollLink(e);
});

const stickyNavigation = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const observer = new IntersectionObserver(stickyNavigation, {
  root: null,
  threshold: 0,
  rootMargin: '-50px',
});
observer.observe(header);

btnMobileIcon.addEventListener('click', function () {
  toggleMobileMenu();
});
