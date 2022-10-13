import { FriendListViewModel } from '../models/view/friendListViewModel';
import { friendListRepository } from '../repositories/friendListRepository';

export const friendListService = {
    async getFriendList(): Promise<FriendListViewModel[]> {
        const getFriendsFromRepository =
            await friendListRepository.getFriendList();

        return getFriendsFromRepository;
    },
};
