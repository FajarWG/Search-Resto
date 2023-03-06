const favoriteButton = () => `
  <button aria-label="favorite this restaurant" id="favoriteButton" class="favorite">
     <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const unfavoriteButton = () => `
  <button aria-label="unfavorite this restaurant" id="unfavoriteButton" class="favorite">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

const FavoriteButtonInitiator = {
  async init({ favoriteButtonContainer, favoriteRestaurants, restaurant }) {
    this._favoriteButtonContainer = favoriteButtonContainer;
    this._restaurant = restaurant;
    this._favoriteRestaurants = favoriteRestaurants;
    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const Restaurant = await this._favoriteRestaurants.getRestaurant(id);
    return !!Restaurant;
  },

  _renderLike() {
    this._favoriteButtonContainer.innerHTML = favoriteButton();

    const displayBtn = document.querySelector('#favoriteButton');
    displayBtn.addEventListener('click', async () => {
      await this._favoriteRestaurants.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._favoriteButtonContainer.innerHTML = unfavoriteButton();

    const displayBtn = document.querySelector('#unfavoriteButton');
    displayBtn.addEventListener('click', async () => {
      await this._favoriteRestaurants.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default FavoriteButtonInitiator;
