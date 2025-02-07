import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { User } from '../../_models/user';
import { UserGit } from '../../_models/userGit';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  user: UserGit | undefined;

  constructor (private userServicee: UserService ){

  }

  ngOnInit(): void {
    this.getGitUser();
  }

  getGitUser(){
    this.userServicee.getGitUser('facebook').subscribe((response: UserGit) => {
      this.user = response;
    })
  }

}
