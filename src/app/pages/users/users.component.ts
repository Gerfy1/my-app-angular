import { Component } from '@angular/core';
import { User } from '../../_models/user';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: false,

  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  //users: String[] = ['Fernando', 'Ricardo', 'Lucas', 'Pedro', 'Marina'];

  userSelecionado: User | undefined;
  userForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder ){}

  users: User [] = [
    {
      nome: 'Fernando',
      idade: 25
    },
    {
      nome: 'Paula',
      idade: 21
    },
    {
      nome: 'Lucas',
      idade: 29
    },
    {
      nome: 'Katrina',
      idade: 42
    }
  ]

  infoUserSelecionado(user: User){
    this.userSelecionado = user;
  }
}
