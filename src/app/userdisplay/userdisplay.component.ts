import { Component, OnInit } from '@angular/core';
import { User, UserResolved } from '../userdisplay/user';
import { UserdataService } from './userdata.service';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-userdisplay',
  templateUrl: './userdisplay.component.html',
  styleUrls: ['./userdisplay.component.css']
})
export class UserdisplayComponent implements OnInit {
userArr:User[]=[];
userData:UserResolved;
errormsg:String;
  constructor(private _data:UserdataService,private _router:Router,private actroute:ActivatedRoute) {
this.userData=this.actroute.snapshot.data['udata']
  }
  ngOnInit() {

    this.userArr=this.userData.data;
    this.errormsg=this.userData.errormsg;

  }
onUserDelete(item:User){
  this._data.deleteUser(item.user_email).subscribe(
    (data:any)=>{
      this.userArr.splice(this.userArr.indexOf(item),1);
      alert("deleted");
    }

  );
}
onUserEdit(item:User){
  this._router.navigate(['/userdisplay/edituser',item.user_email]);

}

}
