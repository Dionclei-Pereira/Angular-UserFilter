import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter-options.interface';
import { filterUsersList } from './utils/filter-users-list';

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
  usersListFiltered: IUser[] = [];

  changeSelectedUser(user: IUser) {
   this.selectedUser = user; 
  }

  ngOnInit() {
    setTimeout(() => {
      this.usersList = UsersList
      this.usersListFiltered = this.usersList;
    }, 1500);
  }

  onFilter(filterOptions: IFilterOptions) {
    this.usersListFiltered = filterUsersList(filterOptions, this.usersList);
  }
}
