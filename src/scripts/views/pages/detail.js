/* eslint-disable no-underscore-dangle */
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/fetch-data';
import { articleRestoDetail } from '../../components/article-resto';
import RestaurantReviewInitiator from '../../utils/restaurant-review-initiator';
import FavoriteButtonInitiator from '../../utils/favorite-btn-initiator';
import FavoriteRestaurantDB from '../../data/database';

const Detail = {
  async render() {
    return `
    <div id="content" tabindex="0">
        <section class="title-content">
        <h2><span>Detail Restaurant</span></h2>
        </section>
        <div class="explore" id="exploreContent">
        </div>
        <div id="favoriteButtonContainer"></div>
        <review-form></review-form>
    </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantSource.detailResto(url.id);
    articleRestoDetail(resto);
    this._initialDetailPage(resto);

    FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantDB,
      restaurant: {
        id: resto.id,
        name: resto.name,
        city: resto.city,
        description: resto.description,
        pictureId: resto.pictureId,
        rating: resto.rating,
      },
    });
  },

  async _initialDetailPage(restaurantDetail) {
    RestaurantReviewInitiator.init(restaurantDetail, document.querySelector('review-form'));
  },

};

export default Detail;
