import FavoriteButtonInitiator from '../../src/scripts/utils/favorite-btn-initiator';
import FavoriteRestaurantDB from '../../src/scripts/data/database';

const InitializeFavoriteButton = async (restaurant) => {
  await FavoriteButtonInitiator.init({
    favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
    favoriteRestaurants: FavoriteRestaurantDB,
    restaurant,
  });
};

export { InitializeFavoriteButton };
