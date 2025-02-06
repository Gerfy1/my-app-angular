import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { User } from '../../_models/user';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor (private userServicee: UserService ){

  }

  ngOnInit(): void {
    this.getGitUser();
  }

  getGitUser(){
    this.userServicee.getGitUser('facebook').subscribe((response: any) => {
      console.log(response);
    })
  }

}
