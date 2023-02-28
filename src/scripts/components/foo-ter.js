class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<footer>
      <p>&copy; Copyright 2023 | <a href="/">Search Resto</a></p>
    </footer>`;
  }
}
customElements.define('foo-ter', Footer);
