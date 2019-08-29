import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { UserdataService } from '../userdata.service';
import { User } from '../user';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
adduser:FormGroup;
temp:User[]=[];
debouncer: any;
  constructor(private fb:FormBuilder,private _userdata:UserdataService) { }

  ngOnInit() {
    this.adduser=this.fb.group({
      user_email:new FormControl(null),
      user_name:new FormControl(null),
      user_password:new FormControl(null),
      user_mobile_no:new FormControl(null)
    })
  }
  onSaveUser(){
    this._userdata.addUser(new User(this.adduser.value.user_email,this.adduser.value.user_name,
      this.adduser.value.user_password,this.adduser.value.user_mobile_no)
    ) .subscribe((x: any) => {
      this.temp=x;
      console.log(this.adduser.value);
      alert("record added");
    });
  }
}
