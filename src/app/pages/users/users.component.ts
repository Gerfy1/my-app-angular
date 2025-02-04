import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: false,

  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  //users: String[] = ['Fernando', 'Ricardo', 'Lucas', 'Pedro', 'Marina'];

  userSelecionado: User | undefined;
  userForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.userForm = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(250)]],
      idade: ['', [Validators.required, Validators.min(12), Validators.max(120)]]
    })
  }
  submitForm() {
    if (this.userForm.valid){
      this.users.push(this.userForm.value);
      this.userForm.reset();
    }
  }

  users: User[] = [
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

  infoUserSelecionado(user: User) {
    this.userSelecionado = user;
  }
}
