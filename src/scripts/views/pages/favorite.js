/* eslint-disable no-underscore-dangle */
import FavoriteRestaurantDB from '../../data/database';
import FavoriteButtonInitiator from '../../utils/favorite-btn-initiator';

const BoorkMark = {
  async render() {
    return `
    <div id="restaurantBookmark" class='container__secondary card-1 mt8'>
        <h2 class="mt1 center">Bookmark Anda</h2>
         <section id="restaurant-bookmark">
         </section>
    </div>
      `;
  },

  async afterRender() {
    try {
      this._restaurantBookmark = document.getElementById('restaurantBookmark');
      this._dataRestaurant = await FavoriteRestaurantDB.getRestaurant();
      this._initialContentBookmarkPage(this._dataRestaurant, this._restaurantBookmark);
    } catch (error) {
      console.log(error);
    }
  },

  async _initialContentBookmarkPage(dataRestaurant, bookmarkContent) {
    FavoriteButtonInitiator.init({
      data: dataRestaurant,
      content: bookmarkContent,
    });
  },
};

export default BoorkMark;
