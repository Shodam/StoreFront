import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import { map } from 'rxjs/operators';

import { IUser } from './IUser'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost/api';
  constructor(private http: HttpClient) { }
  getAll()
  {
    return this.http.get(`${this.baseUrl}/list`).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }
}
