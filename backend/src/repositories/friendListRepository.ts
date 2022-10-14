import { OkPacket } from 'mysql';
import { db } from '../data/connection';
import { FriendListViewModel } from '../models/view/friendListViewModel';

export const friendListRepository = {
    async getFriendList(): Promise<FriendListViewModel[]> {
        const friendListQuery = `SELECT
                                *
                            FROM
                                userFriendList
      `;
        const friendList = await db.query<FriendListViewModel[]>(
            friendListQuery
        );
        return friendList;
    },
    async addFriend(
        name: string,
        email: string,
        comment: string,
        favFood: number,
        relationshipStatus: number
    ): Promise<void> {
        const friendListQuery = `INSERT INTO
                                              userfriendlist (
                                                  name,
                                                  email,
                                                  comment,
                                                  favFood,
                                                  relationshipStatus
                                              )
                                          VALUES (
                                              ?, ?, ?, ?, ?
                                          )
      `;
        const friendList = await db.query(friendListQuery, [
            name,
            email,
            comment,
            favFood.toString(),
            relationshipStatus.toString(),
        ]);
    },
};
