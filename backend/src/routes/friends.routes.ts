import express from 'express';
import { friendListController } from '../controllers/friendListController';

const friendsRouter = express.Router();

friendsRouter.get('', friendListController.getFriendListFromFriendListService);
friendsRouter.post('/add-friend', friendListController.addFriendToFriendList);

export default friendsRouter;
