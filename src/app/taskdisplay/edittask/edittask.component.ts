import { Component, OnInit } from '@angular/core';
import { TaskdataService } from '../taskdata.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../task';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit {
edits:FormGroup;
Id:string;
displayTask:Task;
  constructor(private _data:TaskdataService,private _actroute:ActivatedRoute,private _router:Router,private fb:FormBuilder) { }

  ngOnInit() {
    this.Id=this._actroute.snapshot.params["Id"];
    this._data.getTaskById(this.Id).subscribe((data: Task[])=>{
      this.displayTask =data[0];
      this.edits.patchValue({
       Id: this.displayTask.Id,
        Title:this.displayTask.Title,
        Status:this.displayTask.Status

      });
    });
    this.edits=this.fb.group({
    Id: new FormControl(null),
      Title:new FormControl(null),
      Status: new FormControl(null)
    });
   }
   onEditUser(){
     this._data.editTask(this.edits.value).subscribe(
       (data:any)=>{
         alert("updated!");
         this._router.navigate(['']);
       }
     )
   }




  }




