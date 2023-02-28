import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

import './components/nav-bar';
import './components/article-resto';
import './components/foo-ter';
import './components/molecule/review-form';

const app = new App({
  button: document.querySelector('.menu-button'),
  drawer: document.querySelector('#nav'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
