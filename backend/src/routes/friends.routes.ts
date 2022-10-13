import express from 'express';
import { friendListController } from '../controllers/friendListController';

const friendsRouter = express.Router();

friendsRouter.get(
    '/friendList',
    friendListController.getFriendListFromFriendListService
);

export default friendsRouter;
