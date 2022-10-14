import { Component } from '@angular/core';
import { FriendListService } from 'src/app/core/services/friend-list.service';
import { FriendListViewModel } from 'src/app/models/shared/friendListViewModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bro-list';
}
