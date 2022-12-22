import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import { IUser } from '../IUser';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  title = 'StoreFront';
  user: IUser[] = [];
  error = '';
  success= '';
  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(): void
  {

    this.userService.getAll().subscribe(
      (data: IUser[]) => {
        this.user = data;
        this.success = 'successful retrieval of the list';
      },
      (err) => {
        console.log(err);
        this.error = err;
      }
    );

  }

}
