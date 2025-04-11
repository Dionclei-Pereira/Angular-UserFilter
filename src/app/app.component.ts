import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = 'Angular-UserFilter';

  selectedUser: IUser | undefined;

  usersList: IUser[] = [];

  changeSelectedUser(user: IUser) {
   this.selectedUser = user; 
  }

  ngOnInit() {
    setTimeout(() => {
      this.usersList = UsersList
    }, 1500);
  }
}
