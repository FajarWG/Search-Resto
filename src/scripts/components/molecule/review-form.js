/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
class reviewForm extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set asyncReviews(reviews) {
    this._restaurantReviews = reviews;
    this._render();
  }

  set sendReview(eventSend) {
    this._sendReview = eventSend;
    // this._render();
    this.querySelector('#reviewForm').reset;
  }

  get valueName() {
    return this.querySelector('#name').value;
  }

  get valueReview() {
    return this.querySelector('#review').value;
  }

  render() {
    this.innerHTML = `<div class="review-form">
      <h2 class="subtitles">Beri Reviews Restaurant Ini</h2>
      <form id="reviewForm">
          <label for="name">Nama</label>
          <input type="text" id="name" name="name" placeholder="Masukkan nama anda" required>
          <label for="review">Review</label>
          <textarea id="review" name="review" placeholder="Masukkan review anda" required></textarea>
          <button type="submit" class="btn">Kirim</button>
      </form>
      </div>`;
    this.querySelector('#reviewForm').addEventListener('submit', function (event) {
      event.preventDefault();
      this._sendReview;
    });
  }
}
customElements.define('review-form', reviewForm);
