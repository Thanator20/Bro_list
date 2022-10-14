import { Component, OnInit } from '@angular/core';
import { FriendListService } from 'src/app/core/services/friend-list.service';
import { FriendListViewModel } from 'src/app/models/shared/friendListViewModel';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss'],
})
export class FriendListComponent implements OnInit {
  friendList: FriendListViewModel[] = [];
  constructor(private friendListService: FriendListService) {}

  ngOnInit(): void {
    this.friendListService.getFriendList().subscribe((x) => {
      this.friendList = x;
    });
  }
}
