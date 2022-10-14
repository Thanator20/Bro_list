import { NextFunction, Request, Response } from 'express';
import { friendListService } from '../services/friendListService';
import { badRequestError } from '../services/generalErrorService';

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
        const { name, email, favFood, relationshipStatus } = req.body;
        let { comment } = req.body;
        if (!name || !email || !favFood || !relationshipStatus) {
            next(badRequestError('All required field must be filled!!'));
            return;
        }
        if (!comment) {
            comment = 'no comment';
        }
        if (name.split('').lenght < 4) {
            next(badRequestError('Name must be at lest 4 charter long'));
            return;
        }
        if (comment.split('').lenght > 30) {
            next(badRequestError('Comment must be at maximum 30 charter long'));
            return;
        }
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
    async updateFriendToFriendList(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        const { name, email, comment, favFood, relationshipStatus } = req.body;
        const { id } = req.query;
        try {
            const updateFriend =
                await friendListService.updateFriendToRepository(
                    name,
                    email,
                    comment,
                    favFood,
                    relationshipStatus,
                    parseInt(id as string)
                );
            res.status(201).send();
        } catch (err) {
            next(err);
        }
    },
};
