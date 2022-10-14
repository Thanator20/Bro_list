import express from 'express';
import { favouriteFoodController } from '../controllers/favouriteFoodController';

const favouriteFoodRouter = express.Router();

favouriteFoodRouter.post(
    '/add-fav-food',
    favouriteFoodController.addFavouriteFood
);
favouriteFoodRouter.get(
    '/fav-foods',
    favouriteFoodController.getFavouriteFoods
);
favouriteFoodRouter.get(
    '/fav-food',
    favouriteFoodController.getFavouriteFoodsById
);

export default favouriteFoodRouter;
