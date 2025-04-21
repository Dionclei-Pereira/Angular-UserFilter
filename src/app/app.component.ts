import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter-options.interface';
import { isWithinInterval } from 'date-fns';

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
    filteredList = this.filterUsersListByStatus(filterOptions.status, filteredList);
    filteredList = this.filterUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);
    return filteredList;
  }
  filterUsersListByDate(startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] {
    const DATES_NOT_SELECTED = startDate === undefined || endDate === undefined;
    if (DATES_NOT_SELECTED) return usersList;

    const checkInterval = (u: IUser) => isWithinInterval(new Date(u.registrationDate), {
      start: startDate,
      end: endDate
    });
    
    const listFiltered = usersList.filter(checkInterval);
    return listFiltered;
  }

  filterUsersListByStatus(status: boolean | undefined, usersList: IUser[]): IUser[] {
    const STATUS_NOT_TYPPED = status === undefined;
    if (STATUS_NOT_TYPPED) return usersList;

    const filteredList = usersList.filter(u => u.active === status);
    return filteredList;
  }

  filterUsersListByName(name: string | undefined, usersList: IUser[]): IUser[] {
    const NAME_NOT_TYPPED = name === undefined;
    if (NAME_NOT_TYPPED) return usersList;

    const filteredList = usersList.filter(u => u.name.toLowerCase().includes(name.toLowerCase()));
    return filteredList;
  }
}
