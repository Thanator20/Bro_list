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
    async addFriendToFriendList(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        const { name, email, comment, favFood, relationshipStatus } = req.body;
        try {
            const addFriend = await friendListService.addFriendToRepository(
                name,
                email,
                comment,
                favFood,
                relationshipStatus
            );
            res.status(201).send();
        } catch (err) {
            next(err);
        }
    },
    async deleteFriendFromFriendList(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        const { id } = req.query;
        try {
            const deleteFriend =
                await friendListService.deleteFriendFromRepository(
                    parseInt(id as string)
                );
            res.status(200).send();
        } catch (err) {
            next(err);
        }
    },
};
