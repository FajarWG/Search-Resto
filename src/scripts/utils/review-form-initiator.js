import RestaurantSource from '../data/fetch-data';

const ReviewFormInitiator = {
  init(data, elmReview) {
    this._data = data;
    this._elmReview = elmReview.reviewForm;
    console.log(this._elmReview);
    this._initialSend();
  },

  _initialSend() {
    const eventSendReview = async (event) => {
      event.preventDefault();
      const { name } = this._elmReview;
      const { review } = this._elmReview;
      const reviewData = {
        id: this._data.id,
        name,
        review,
      };
      console.log(reviewData);
      await RestaurantSource.addReview(reviewData);
    };
    this._elmReview.sendReview = eventSendReview;
  },

};

export default ReviewFormInitiator;
