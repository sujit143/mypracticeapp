import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {  Router } from '@angular/router';
import { UserdataService } from '../userdisplay/userdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login:FormGroup;

  constructor(private _router:Router,private fb:FormBuilder,private _userdata:UserdataService) { }

  ngOnInit() {
 this.login=this.fb.group({
   user_email:new FormControl(null),
   user_password:new FormControl(null)
 });

  }
  onLoginSubmit(){
    this._userdata.login(
      this.login.value.user_email,
      this.login.value.user_password
    );
    if (this._userdata.redirectURL) {
      this._router.navigateByUrl(this._userdata.redirectURL);
    } else {
      this._router.navigate([""]);
    }
  }
}
