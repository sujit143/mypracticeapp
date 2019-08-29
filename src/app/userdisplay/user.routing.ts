import { UserGuardService } from "../user-guard.service";
import { UserResolverService } from '../user-resolver.service';
import { UserdisplayComponent } from './userdisplay.component';
import { EdituserComponent } from './edituser/edituser.component';
import { AdduserComponent } from './adduser/adduser.component';
import { Routes, RouterModule } from '@angular/router';





const arr: Routes = [
  {path:'', children:[
  {path: '', canActivate: [UserGuardService], resolve: {udata: UserResolverService}, component: UserdisplayComponent},
  {path: 'edituser/:user_email', component: EdituserComponent},
  {path: 'adduser', canActivate: [UserGuardService], component: AdduserComponent}
  ]},

];
export const userrouting=RouterModule.forChild(arr);
