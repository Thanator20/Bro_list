import { favouriteFoodListRepository } from '../repositories/favouriteFoodListRepository';

export const favouriteFoodService = {
    async addFavouriteFood(name: string): Promise<void> {
        const addFriendToRepository =
            await favouriteFoodListRepository.addFavouriteFood(name);
    },
};
