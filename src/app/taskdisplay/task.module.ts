import { NgModule } from '@angular/core';
import { TaskdisplayComponent } from './taskdisplay.component';
import { EdittaskComponent } from './edittask/edittask.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Taskrouting } from './task.routing';




@NgModule({
  declarations: [
    TaskdisplayComponent,
    EdittaskComponent,
    AddtaskComponent
  ],
  imports: [
    CommonModule,
    Taskrouting,
     ReactiveFormsModule
  ],
})
  export class TaskModule { }
