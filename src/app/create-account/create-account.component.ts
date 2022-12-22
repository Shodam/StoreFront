import { Component, OnInit } from '@angular/core';
import {IUser} from "../IUser";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  username = document.getElementById("username");
  password = document.getElementById("password");
  firstname = document.getElementById("firstname");
  lastname = document.getElementById("lastname");
  account: IUser = {
    username: this.username,
    password: this.password,
    firstname: this.firstname,
    lastname: this.lastname
  }
  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit(): void {
  }

  createAccount(username: HTMLElement, password: HTMLElement, firstname: HTMLElement, lastname: HTMLElement   ): void {
    const account: IUser =
      {username: username, password: password, firstname: firstname, lastname: lastname};
    this.http.post('http://localhost:8080/add',account).subscribe();
    this.router.navigate(['/thank-you-account']);
    console.log(account);
    console.log("Account Created");
  }

}
