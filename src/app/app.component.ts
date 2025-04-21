import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter-options.interface';

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
    this.usersListFiltered = this.filterUsersList(filterOptions, this.usersList);
  }

  filterUsersList(filterOptions: IFilterOptions, usersList: IUser[]): IUser[] {
    let filteredList: IUser[] = [];
    filteredList = this.filterUsersListByName(filterOptions.name, usersList);

    return filteredList;
  }
  filterUsersListByName(name: string | undefined, usersList: IUser[]): IUser[] {
    const NAME_NOT_TYPPED = name === undefined;
    if (NAME_NOT_TYPPED) return usersList;

    const filteredList = usersList.filter(u => u.name.toLowerCase().includes(name.toLowerCase()));
    return filteredList;
  }
}
