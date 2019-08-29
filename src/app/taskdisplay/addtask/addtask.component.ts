import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Task } from '../task';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskdataService } from '../taskdata.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
Addtask:FormGroup;
displaytask:Task;
  constructor(private _actroute:ActivatedRoute,private _router:Router,private _data:TaskdataService,private fb:FormBuilder) {  }

  ngOnInit() {
  this.Addtask=this.fb.group({
    Id:new FormControl(null),
    Title:new FormControl(null),
    Status:new FormControl(null)
  })
  }
  onAddUser(){
    this._data.addtask(new Task(this.Addtask.value.Id,this.Addtask.value.Title,
      this.Addtask.value.Status)
    ) .subscribe((x: any) => {
    this._router.navigate(['taskdisplay']);
      alert("record added");
    });
  }
  }
