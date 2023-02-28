
import FavoriteRestaurantDB from '../../data/database';
import { articleResto } from '../../components/article-resto';

const Favorite = {
  async render() {
    return `
    <div id="content" tabindex="0">
        <section class="title-content">
        <h2><span>Favorite Restaurant</span></h2>
        </section>
        <div class="explore" id="exploreContent">
        </div>
    </div>
      `;
  },

  async afterRender() {
    const favoriteRestaurants = await FavoriteRestaurantDB.getAllRestaurants();
    const favoriteRestaurantsContainer = document.querySelector('#exploreContent');
    if (favoriteRestaurants.length === 0) {
      favoriteRestaurantsContainer.innerHTML = `
        <div class="no-favorite">
          <p>There is no favorite restaurant</p>
        </div>
      `;
    } else {
      articleResto(favoriteRestaurants);
    }
  },

};

export default Favorite;
