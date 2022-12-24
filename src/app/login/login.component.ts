import { Component, OnInit } from '@angular/core';
import {IUser} from "../IUser";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
  username = document.getElementById("username");
  password = document.getElementById("password");
  statusMessage: any;

  account: IUser =
    {username: this.username, password: this.password};

  ngOnInit(): void {
  }
  loginAccount(username: HTMLElement, password: HTMLElement): void
  {
    this.http.post('http://localhost:8080/login',this.account).subscribe((response)=> {
      if (!response['success'])
      {
        this.statusMessage = "Invalid Username or Password";
      }else
      {
        this.statusMessage= "Login Successful";
        this.router.navigate(['/home']);
      }
    });
  }
  }
