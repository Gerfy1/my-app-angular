import { Component, Input } from '@angular/core';
import { User } from '../../_models/user';

@Component({
  selector: 'app-user-card',
  standalone: false,

  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input() user: User | null = null;
}
