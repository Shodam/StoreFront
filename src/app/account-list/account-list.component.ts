import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';
import {IUser} from "../IUser";
import * as http from "http";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {
users: any[];
  constructor(private http: HttpClient) {
    this.http.get<any[]>('http://localhost:8080/list').subscribe((data: IUser[]) => {
      this.users = data;
    });
  }
  ngOnInit(): void {
  }

  displayedColumns: string[] = ['Username', 'First Name', 'Last Name'];
}
