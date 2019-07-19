import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  @ViewChild('createUserModal', { static: false }) createUserModal: ModalDirective;
  
  constructor() { }

  ngOnInit() {
  }

  show(): void {
    this.createUserModal.show();
  }
 
  close(): void {
    this.createUserModal.hide();
  }

}
