import {  Routes, RouterModule } from '@angular/router';
import { TaskResolverService } from '../task-resolver.service';
import { TaskdisplayComponent } from './taskdisplay.component';
import { EdittaskComponent } from './edittask/edittask.component';
import { UserGuardService } from '../user-guard.service';
import { AddtaskComponent } from './addtask/addtask.component';





const arr: Routes = [
  {path:'', children:[
  {path: '', resolve: {tdata: TaskResolverService}, component: TaskdisplayComponent},
  {path: 'edittask/:Id', component: EdittaskComponent},
  {path: 'addtask', canActivate: [UserGuardService], component: AddtaskComponent}
  ]},
];




export const Taskrouting = RouterModule.forChild(arr);

