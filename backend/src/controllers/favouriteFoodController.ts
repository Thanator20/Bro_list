import { NextFunction, Request, Response } from 'express';
import { favouriteFoodService } from '../services/favouriteFoodService';
import { badRequestError } from '../services/generalErrorService';

export const favouriteFoodController = {
    async addFavouriteFood(req: Request, res: Response, next: NextFunction) {
        const { name } = req.body;
        if (!name) {
            next(badRequestError('Add your favorite food a name!'));
            return;
        }

        try {
            const addFriend = await favouriteFoodService.addFavouriteFood(name);
            res.status(201).send();
        } catch (err) {
            next(err);
        }
    },
    async getFavouriteFoods(req: Request, res: Response, next: NextFunction) {
        try {
            const getFavFood = await favouriteFoodService.getFavouriteFoods();
            res.status(200).send(getFavFood);
        } catch (err) {
            next(err);
        }
    },
    async getFavouriteFoodsById(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        const { id } = req.query;
        try {
            const getFavFoodById =
                await favouriteFoodService.getFavouriteFoodsById(
                    parseInt(id as string)
                );
            res.status(200).send(getFavFoodById);
        } catch (err) {
            next(err);
        }
    },
};
