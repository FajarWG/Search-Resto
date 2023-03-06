/* eslint-disable import/prefer-default-export */

import CONFIG from '../global/config';

const articleResto = (data) => {
  let elmHtml = '';
  let description = '';

  data.forEach((restaurant) => {
    description = `${restaurant.description.slice(0, 90)}...`;
    elmHtml += `
              <article class="item" id="resto-item" aria>
                  <div class="image"> 
                      <img class="lazyload" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="Restoran ${restaurant.name} , ${restaurant.city}">
                  </div>
                  <div class="item-detail" id="items">
                      <a href="/#/detail/${restaurant.id}" class="title">${restaurant.name}</a>
                      <h4 class="subtitle">${restaurant.city}</h4>
                      <div class="description">
                          <p>${description}</p>
                      </div>
                  </div>
              </article>
              `;
  });
  const content = document.querySelector('#exploreContent');
  content.innerHTML = elmHtml;
};

const articleRestoDetail = (restaurant) => {
  let foodMenu = '';
  let drinkMenu = '';
  let reviews = '';

  restaurant.menus.foods.forEach((food) => {
    foodMenu += `${food.name}, `;
  });
  restaurant.menus.drinks.forEach((drink) => {
    drinkMenu += `${drink.name}, `;
  });

  restaurant.customerReviews.forEach((review) => {
    reviews += `
        <div class="review">
            <h4>${review.name}</h4>
            <p>${review.review}</p>
            <span>${review.date}</span>
        </div>
        `;
  });

  const elmHtml = `
                <article class="item details aria>
                    <div class="image"> 
                        <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="Restoran ${restaurant.name} , ${restaurant.city}">
                    </div>
                    <div class="item-detail">
                    <a href="/#/detail/${restaurant.id}" class="title">${restaurant.name}</a>
                    <p>${restaurant.city}</p>
                        <h2 class="subtitles">Informasi</h2>
                        <h5 class="subtitle">Alamat</h5>
                        <p>${restaurant.address}</p>
                        <h5 class="subtitle">Rating</h5>
                        <p>${restaurant.rating}</p>
                        <h5 class="subtitle">Food Menu</h5>
                        <p>${foodMenu}</p>
                        <h5 class="subtitle">Drink Menu</h5>
                        <p>${drinkMenu}</p>
                        <h2 class="subtitles">Deskripsi</h2>
                        <p>${restaurant.description}</p>
                        <h2 class="subtitles">Reviews</h2>
                        ${reviews}
                    </div>
                </article>
                `;
  const content = document.querySelector('#exploreContent');
  content.innerHTML = elmHtml;
};

export { articleResto, articleRestoDetail };
