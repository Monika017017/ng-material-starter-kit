import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GenderUserModel } from '../models/gender-user.model';

@Injectable()
export class GenderUserService {
  constructor(private _httpClient: HttpClient) {
  }

  getOne(name: string): Observable<GenderUserModel> {
    return this._httpClient.get<GenderUserModel>(`https://api.genderize.io/?name=${name}`);
  }
}
