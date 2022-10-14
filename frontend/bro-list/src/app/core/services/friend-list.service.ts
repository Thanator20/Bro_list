import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { FriendListViewModel } from 'src/app/models/shared/friendListViewModel';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FriendListService {
  constructor(private http: HttpClient) {}

  getFriendList(): Observable<FriendListViewModel[]> {
    return this.http.get<FriendListViewModel[]>(
      `${environment.apiUrl}/friends`
    );
  }
}
