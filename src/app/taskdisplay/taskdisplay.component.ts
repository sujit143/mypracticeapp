import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from './task';
import { TaskdataService } from './taskdata.service';

@Component({
  selector: 'app-taskdisplay',
  templateUrl: './taskdisplay.component.html',
  styleUrls: ['./taskdisplay.component.css']
})
export class TaskdisplayComponent implements OnInit {
arr:Task[]=[];
tasks;
errormsg:string;

  constructor(private _router:Router,private _data:TaskdataService,private _act:ActivatedRoute) {
    this.tasks=this._act.snapshot.data['tdata'];
  }

  ngOnInit() {
this.arr=this.tasks.task;
this.errormsg=this.tasks.errormsg;
  }
  ondeleteTask(item:Task){
this._data.deleteTask(item.Id).subscribe(
  (data:any)=>{
    this.arr.splice(this.arr.indexOf(item),1);
    alert("deleted");
  }
);
  }
  onEditTask(item:Task){
    this._router.navigate(['/taskdisplay/edittask',item.Id]);
  }
  }


