import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskdataService {
url:string="https://nodejsapidemo.herokuapp.com/tasks/"
  constructor(private _http:HttpClient) { }

getAllTasks(){
return this._http.get(this.url);
}
getTaskById(Id){
return this._http.get(this.url+Id);
}
editTask(newtask){
  // let head=new HttpHeaders().set("Content-Type", "application/json");
  let body = JSON.stringify(newtask);
  return this._http.put(this.url+ newtask.Id, body);
}
addtask(newtask){
  let body = JSON.stringify(newtask);
  return this._http.post(this.url,body);
}

deleteTask(Id){
  let head=new HttpHeaders().set("Content-Type", "application/json");
  return this._http.delete(this.url+Id, { headers: head });
}
}
