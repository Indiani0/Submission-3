import API_ENDPOINT from '../globals/api-endpoint';

// request data pada API menggunakan Fetch.
class TheRestaurantDbSource {
  static async homeRestaurantList () {
    const response = await fetch(API_ENDPOINT.HOME_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant (id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default TheRestaurantDbSource;
