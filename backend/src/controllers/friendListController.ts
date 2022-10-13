import { NextFunction, Request, Response } from 'express';
import { friendListService } from '../services/friendListService';

export const friendListController = {
    async getFriendListFromFriendListService(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        try {
            const friendListFromService =
                await friendListService.getFriendList();
            res.status(200).send(friendListFromService);
        } catch (err) {
            next(err);
        }
    },
};
