import { OkPacket } from 'mysql';
import { db } from '../data/connection';
import { FavouriteFoodListViewModel } from '../models/view/favouriteFoodListViewModel';

export const favouriteFoodListRepository = {
    async addFavouriteFood(name: string): Promise<void> {
        const favouriteFoodQuery = `INSERT INTO
                                              favfood (
                                                  name
                                              )
                                          VALUES (
                                              ?
                                          )
      `;
        const addFriendToList = await db.query(favouriteFoodQuery, [name]);
    },
    async listFavouriteFoods(): Promise<FavouriteFoodListViewModel[]> {
        const favouriteFoodQuery: string = `SELECT * FROM favfood`;
        const favouriteFoodList = await db.query<FavouriteFoodListViewModel[]>(
            favouriteFoodQuery
        );
        return favouriteFoodList;
    },
    async listFavouriteFoodsById(
        id: number
    ): Promise<FavouriteFoodListViewModel[]> {
        const favouriteFoodQuery: string = `SELECT * FROM favfood WHERE id = ?`;
        const favouriteFoodListById = await db.query<
            FavouriteFoodListViewModel[]
        >(favouriteFoodQuery, [id.toString()]);
        return favouriteFoodListById;
    },
};
