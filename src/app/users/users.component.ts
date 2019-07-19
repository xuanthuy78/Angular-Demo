import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ModalDirective, BsModalRef,BsModalService } from 'ngx-bootstrap';
import { User } from 'src/shared/dto/user';
import { UserService } from 'src/shared/services/user.service';
import { UpdateUserComponent } from './update-user/update-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @ViewChild('createUserModal', { static: false }) createUserModal: ModalDirective;
  @ViewChild(UpdateUserComponent, {static: false}) editUser : UpdateUserComponent;
  
  modalRef: BsModalRef;
  users: User[];
  constructor(
    private userService: UserService,
    private modalService: BsModalService
  ) { }

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
  
  updateUser(user): void {
    this.editUser.show(user);
  }

  loadUserByPage(): void {
    this.getUser();
  }

  openModalDelete(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }  

  deleteUser(id): void {
    this.userService.deleteUser(id).subscribe(data => {
      this.getUser()
    });
    this.modalRef.hide();
  }
 
  decline(): void {
    this.modalRef.hide();
  }

}
