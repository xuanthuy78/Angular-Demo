import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import {NgForm} from '@angular/forms';
import { UserService } from 'src/shared/services/user.service';
import { User } from 'src/shared/dto/user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  @ViewChild('createUserModal', { static: false }) createUserModal: ModalDirective;
  @ViewChild('createUserForm', { static: false }) userForm: NgForm;

  @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();

  active: boolean = false;
  user = { 
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    address: ''
  };

  constructor(
    public userService: UserService, 
  ) { }

  ngOnInit() {
  }

  show(): void {
    this.user = new User();
    this.active = true;
    this.createUserModal.show();
  }

  save() {
    if (this.userForm.valid) {
      this.userService.createUser(this.user).subscribe( data => {
        this.close();
        this.modalSave.emit(true);
      })
    }
    
  }
 
  close(): void {
    this.createUserModal.hide();
  }

}
