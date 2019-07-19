import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { User } from 'src/shared/dto/user';
import { UserService } from 'src/shared/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @ViewChild('createUserModal', { static: false }) createUserModal: ModalDirective;
  @ViewChild('updateUserModal', { static: false }) updateUserModal: ModalDirective;
  
  users: User[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUser();
    this.loadUserByPage();
  }

  getUser(): void {
    this.userService.getUsers().subscribe(data => this.users = data)
  }

  createUser(): void {
    this.createUserModal.show();
  }
  
  updateUser(): void {
    this.updateUserModal.show();
  }

  loadUserByPage(): void {
    this.getUser();
  }
}
