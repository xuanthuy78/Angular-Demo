import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  @ViewChild('updateUserModal', { static: false }) updateUserModal: ModalDirective;
  
  constructor() { }

  ngOnInit() {
  }

  show(): void {
    this.updateUserModal.show();
  }
 
  close(): void {
    this.updateUserModal.hide();
  }
}
