import API_ENDPOINT from '../global/endpoint';
import CONFIG from '../global/config';

class RestaurantSource {
  static async getResto() {
    const response = await fetch(API_ENDPOINT.RESTO);
    const responseJson = await response.json();

    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.RESTO_DETAIL(id));
    const responseJson = await response.json();

    return responseJson.restaurant;
  }

  static async addReview(review) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'X-Auth-Token': CONFIG.API_TOKEN,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    });
    return response.json();
  }
}

export default RestaurantSource;
