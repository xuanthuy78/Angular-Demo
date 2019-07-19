import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @ViewChild('createUserModal', { static: false }) createUserModal: ModalDirective;
  @ViewChild('updateUserModal', { static: false }) updateUserModal: ModalDirective;
  
  constructor() { }

  ngOnInit() {
  }

  createUser(): void {
    this.createUserModal.show();
  }
  
  updateUser(): void {
    this.updateUserModal.show();
  }
}
