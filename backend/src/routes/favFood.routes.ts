import express from 'express';
import { favouriteFoodController } from '../controllers/favouriteFoodController';

const favouriteFoodRouter = express.Router();

favouriteFoodRouter.post(
    '/add-fav-food',
    favouriteFoodController.addFavouriteFood
);

export default favouriteFoodRouter;
