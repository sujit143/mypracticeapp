import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';
import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { UserdisplayComponent } from './userdisplay.component';
import { NgModule } from '@angular/core';
import { userrouting } from './user.routing';



@NgModule({
  declarations: [
    UserdisplayComponent,
    EdituserComponent,
    AdduserComponent
  ],
  imports:[CommonModule,ReactiveFormsModule, userrouting]
})
export class UserModule{}
