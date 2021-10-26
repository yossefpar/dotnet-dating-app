import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  loggedIn: boolean = false;
  model: any = {};
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {

  }

  login() {
    this.accountService.login(this.model)
      .subscribe(response => {
        console.log(response);
        this.loggedIn = true;
      },
      error => {
        console.log(error);

      })
  }

  //1. create a logout method (we'll sure deal with login/logout differently )
  logout() {
    this.loggedIn = false; // 2. goto the html
  }

}
