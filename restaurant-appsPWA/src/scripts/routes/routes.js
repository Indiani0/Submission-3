import HomeRestaurant from '../views/pages/home-restaurant';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': HomeRestaurant,
  '/home-restaurant': HomeRestaurant,
  '/detail/:id': Detail,
  '/favorite': Favorite
};

export default routes;
