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
};
