import { RelationshipStatus } from '../enums/relationshipStatus';

export interface FriendListViewModel {
    id: number;
    name: string;
    email: string;
    comment: string;
    favFood: number;
    relationshipStatus: number;
}
