import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginUserForm', { static: false }) userForm: NgForm;

  constructor(
    public router: Router
  ) { }

  user = { 
    name: '',
    password: ''
  };
  dismissible = true;
  open = true;
  defaultAlerts: any[] = [
    {
      type: 'danger',
      msg: `Please enter account`
    },
  ];
  alerts = this.defaultAlerts;
  show = null;
  
  ngOnInit() {
  }

  onClosed(dismissedAlert: any): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

  save() {
    if(this.user.name == 'admin' && this.user.password == '123123') {
      this.router.navigate(['/users'])
      this.show = false;
    } else {
      this.show = true;
    }
  }
}
