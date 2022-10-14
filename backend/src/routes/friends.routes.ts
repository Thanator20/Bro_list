import express from 'express';
import { friendListController } from '../controllers/friendListController';

const friendsRouter = express.Router();

friendsRouter.get('', friendListController.getFriendListFromFriendListService);
friendsRouter.post('/add-friend', friendListController.addFriendToFriendList);
friendsRouter.delete(
    '/delete-friend',
    friendListController.deleteFriendFromFriendList
);
friendsRouter.put(
    '/update-friend',
    friendListController.updateFriendToFriendList
);

export default friendsRouter;
