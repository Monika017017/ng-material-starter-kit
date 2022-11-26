import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardDetailsModel } from '../models/card-details.model';

@Injectable()
export class CardDetailsService {
  constructor(private _httpClient: HttpClient) {
  }

  getOne(id: number): Observable<CardDetailsModel> {
    return this._httpClient.get<CardDetailsModel>(`https://fakestoreapi.com/carts/${id}`);
  }
}
