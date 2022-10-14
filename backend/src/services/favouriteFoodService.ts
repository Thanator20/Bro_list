import { favouriteFoodListRepository } from '../repositories/favouriteFoodListRepository';
import { FavouriteFoodListViewModel } from '../models/view/favouriteFoodListViewModel';

export const favouriteFoodService = {
    async addFavouriteFood(name: string): Promise<void> {
        const addFriendToRepository =
            await favouriteFoodListRepository.addFavouriteFood(name);
    },
    async getFavouriteFoods(): Promise<FavouriteFoodListViewModel[]> {
        const addFriendToRepository =
            await favouriteFoodListRepository.listFavouriteFoods();
        return addFriendToRepository;
    },
    async getFavouriteFoodsById(
        id: number
    ): Promise<FavouriteFoodListViewModel[]> {
        const addFriendToRepository =
            await favouriteFoodListRepository.listFavouriteFoodsById(id);
        return addFriendToRepository;
    },
};
