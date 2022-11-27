import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDetailsModel } from '../models/user-details.model';

@Injectable()
export class UserDetailsService {
  constructor(private _httpClient: HttpClient) {
  }

  getOne(id: number): Observable<UserDetailsModel> {
    return this._httpClient.get<UserDetailsModel>(`https://fakestoreapi.com/users/${id}`);
  }
}
