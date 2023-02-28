class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<header>
    <nav id="nav" class="menu">
      <h1>
        <a href="./" title="Navbar Brand">Search Resto</a>
      </h1>
      <button
        class="menu-button"
        title="off canvas button"
        aria-label="off canvas button"
      >
        <i class="fa fa-times"></i>
        <i class="fa fa-bars"></i>
      </button>
      <ul class="menu-list">
        <li><a href="./" title="Link ke halaman home">Home</a></li>
        <li>
          <a href="#/favorite" title="Link ke halaman favorite">Favorite</a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/fajarwg"
            title="Link ke about us"
            target="_blank"
            rel="noreferrer"
            >About Us</a
          >
        </li>
      </ul>
    </nav>
  </header>`;
  }
}
customElements.define('nav-bar', Navbar);
