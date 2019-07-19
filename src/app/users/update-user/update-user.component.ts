import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/shared/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  @ViewChild('updateUserModal', { static: false }) updateUserModal: ModalDirective;
  @ViewChild('updateUserForm', { static: false }) userForm: NgForm;

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

  show(data): void {
    this.user = data
    this.active = true;
    this.updateUserModal.show();
  }

  save() {
    if (this.userForm.valid) {
      this.userService.updateUser(this.user.id, this.user).subscribe( data => {
        this.close();
        this.modalSave.emit(true);
      })
    }
  }
 
  close(): void {
    this.updateUserModal.hide();
  }
}
