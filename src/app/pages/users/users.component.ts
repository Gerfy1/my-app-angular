import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: false,

  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users: String[] = ['Fernando', 'Ricardo', 'Lucas', 'Pedro', 'Marina'];

}
