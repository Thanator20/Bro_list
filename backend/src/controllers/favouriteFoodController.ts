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
};
