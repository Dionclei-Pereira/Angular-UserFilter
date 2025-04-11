import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';
import { UsersList } from '../../data/users-list';

@Component({
  selector: 'app-users-list',
  standalone: false,
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {

  @Input({ required: true })
  usersList: IUser[] = [];

  displayedColumns: string[] = ['name', 'registrationDate', 'status'];

  @Output()
  userSelected = new EventEmitter<IUser>;

  onUserSelected(user: IUser) {
    this.userSelected.emit(user);
  }
}
