import { Component } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular-UserFilter';

  selectedUser: IUser | undefined;

  
  changeSelectedUser(user: IUser) {
   this.selectedUser = user; 
  }
}
