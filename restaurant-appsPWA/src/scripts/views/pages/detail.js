import UrlParser from '../../routes/url-parser';
import TheRestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render () {
    return `
      <div id="restaurant" class="restaurant">Detail</div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurants = await TheRestaurantDbSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurants);

    const Hero = document.querySelector('.hero');
    Hero.style.display = 'none';

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurants.id,
        pictureId: restaurants.pictureId,
        name: restaurants.name,
        rating: restaurants.rating,
        description: restaurants.description
      }
    });
  }
};

export default Detail;
