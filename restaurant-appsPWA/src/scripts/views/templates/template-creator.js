import CONFIG from '../../globals/config';

// menghasilkan string HTML dalam membentuk daftar restaurants dan detail restaurant

const createRestaurantDetailTemplate = (restaurants) => `
  <h2 tabindex="0" class="restaurant__title">${restaurants.name}</h2>
  <img tabindex="0" class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" alt="Gambar Restaurant ${restaurants.name}" />
  <div class="restaurant__info">
    <h3 tabindex="0">Information</h3>
    <h4 tabindex="0">Rating</h4>
    <p tabindex="0">${restaurants.rating}</p>
    <h4 tabindex="0">Address</h4>
    <p tabindex="0">${restaurants.address}, Kota ${restaurants.city}</p>
    <h4 tabindex="0">Categories :</h4>
    <p tabindex="0">${restaurants.categories.map((category) => category.name).join(' | ')}</p>
    <h4 tabindex="0">Foods:</h4>
    ${restaurants.menus.foods.reduce((show, value) => show.concat(`<li tabindex="0">${value.name}</li>`), '')}
    <h4 tabindex="0">Drinks:</h4>
    ${restaurants.menus.drinks.reduce((show, value) => show.concat(`<li tabindex="0">${value.name}</li>`), '')}
  </div>
  <div class="restaurant__overview">
    <h3 tabindex="0">Overview</h3>
    <p tabindex="0">${restaurants.description}</p>
  </div>
  <div class="restaurant__reviews">
    ${restaurants.customerReviews.reduce((show, value) => show.concat(`
        <p tabindex="0">${value.review + ' | ' + value.date}</p>
    `), '<h4 tabindex="0">Customer Reviews: ⭐️⭐️⭐️⭐️⭐️</h4>')}
  </div>
`;

const createRestaurantItemTemplate = (restaurants) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img tabindex="0" class="restaurant-item__header__poster" alt=" Gambar Restaurant ${restaurants.name || '-'}"
           src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${restaurants.rating || '-'}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3 class="restaurant__name"><a href="/#/detail/${restaurants.id}">${restaurants.name || '-'}</a></h3>
      <p tabindex="0">${restaurants.description || '-'}</p>
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
   <button aria-label="like this restaurant" id="likeButton" class="like">
      <i class="fa fa-heart-o" aria-hidden="true"></i>
   </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
   <button aria-label="unlike this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart" aria-hidden="true"></i>
   </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate
};
