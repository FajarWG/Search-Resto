/* eslint-disable import/prefer-default-export */
const articleResto = (data) => {
  let elmHtml = '';
  let description = '';
  data.restaurants.forEach((restaurant) => {
    description = `${restaurant.description.slice(0, 57)}...`;
    elmHtml += `
            <article class="item" aria>
                <div class="image"> 
                    <img src="${restaurant.pictureId}" alt="Restoran ${restaurant.name} , ${restaurant.city}">
                </div>
                <div class="item-detail">
                    <a href="#" class="title">${restaurant.name}</a>
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

export { articleResto };
