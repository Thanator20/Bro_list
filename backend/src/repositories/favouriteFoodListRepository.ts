import { OkPacket } from 'mysql';
import { db } from '../data/connection';

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
};
