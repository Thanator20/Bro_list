import { FriendListViewModel } from '../models/view/friendListViewModel';
import { friendListRepository } from '../repositories/friendListRepository';

export const friendListService = {
    async getFriendList(): Promise<FriendListViewModel[]> {
        const getFriendsFromRepository =
            await friendListRepository.getFriendList();

        return getFriendsFromRepository;
    },
    async addFriendToRepository(
        name: string,
        email: string,
        comment: string,
        favFood: number,
        relationshipStatus: number
    ): Promise<void> {
        const addFriendToRepository = await friendListRepository.addFriend(
            name,
            email,
            comment,
            favFood,
            relationshipStatus
        );
    },
    async deleteFriendFromRepository(id: number): Promise<void> {
        const deleteFriendFromRepository =
            await friendListRepository.deleteFriend(id);
    },
};
