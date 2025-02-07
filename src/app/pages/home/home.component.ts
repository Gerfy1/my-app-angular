import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { User } from '../../_models/user';
import { UserGit } from '../../_models/userGit';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  user: UserGit | undefined;
  username: string = '';

  constructor (private userServicee: UserService, private toastr: ToastrService){

  }

  getGitUser(){
    this.userServicee.getGitUser(this.username).subscribe((response: UserGit) => {
      this.user = response;
    },(error) =>{
      this.toastr.error('Usuário não encontrato', 'Erro');
    });
  }

}
