

import RestaurantSource from '../data/fetch-data';

const RestaurantReviewInitiator = {
  init(data, elmReview) {
    this._data = data.restaurant;
    this._elmReview = elmReview;
    this._elmReview.detailRestaurant = this._data;
    this._initialSend();
  },

  _initialSend() {
    const eventSendReview = async (event) => {
      event.preventDefault();
      const nameInput = this._elmReview.valueName;
      const reviewInput = this._elmReview.valueReview;
      const reviewData = {
        id: this._data.id,
        name: nameInput,
        review: reviewInput,
      };
      const updatedReview = await RestaurantSource.addReview(reviewData);
      this._elmReview.asyncReviews = await updatedReview.customerReviews;
      this._collapsibleOpen();
    };
    this._elmReview.sendReview = eventSendReview;
  },

};

export default RestaurantReviewInitiator;
