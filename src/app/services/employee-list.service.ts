import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeListModel } from '../models/employee-list.model';

@Injectable()
export class EmployeeListService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<EmployeeListModel[]> {
    return this._httpClient.get<EmployeeListModel[]>('https://eqsfaxnghe.cfolks.pl/assets/data/employees.json');
  }
}
