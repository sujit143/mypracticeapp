import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router, ActivatedRoute } from '@angular/router';
import { UserdataService } from '../userdata.service';
import {
  FormGroup,
  FormControl,
FormBuilder,
Validators
} from "@angular/forms";

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})

export class EdituserComponent implements OnInit {
 edituser:FormGroup;
 email:string;
 displayUser:User;
  constructor( private _actroute: ActivatedRoute, private _userdata: UserdataService,
    private fb: FormBuilder,
    private _router:Router) { }

  ngOnInit() {
  this.email=this._actroute.snapshot.params["user_email"];
  this._userdata.getUserByEmail(this.email).subscribe((data: User[])=>{
    this.displayUser =data[0];
    this.edituser.patchValue({
      user_email: this.displayUser.user_email,
      user_name:this.displayUser.user_name,
      user_password:this.displayUser.user_password,
      user_mobile_no:this.displayUser.user_mobile_no

    });
  });

  this.edituser=this.fb.group({
    user_email: new FormControl(null),
    user_name:new FormControl(null),
    user_password: new FormControl(null),
    user_mobile_no:new FormControl(null)

  });
 }

 onUserEdit(){
  this._userdata.editUser(this.edituser.value).subscribe(
    (data:any) => {
      alert("Updated!");
      this._router.navigate(['']);
    }

  )
    // this._userdata.editUser(this.edituser.value).subscribe(
    //   (data:any)=>{
    //    alert("updated!");
    //     this._router.navigate(['']);
    //   });
  }


}


