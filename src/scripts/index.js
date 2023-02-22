import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

import { getRestaurants } from './data/listResto';

const button = document.querySelector('.menu-button');
const nav = document.querySelector('#nav');

document.addEventListener('DOMContentLoaded', () => {
  getRestaurants();
});

button.addEventListener('click', () => {
  nav.classList.toggle('open');
});

window.addEventListener('scroll', () => {
  if (window.scrollY >= 300) {
    document.querySelector('#nav').classList.add('scroll');
  } else {
    document.querySelector('#nav').classList.remove('scroll');
  }
});
