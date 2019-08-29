import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TaskdataService } from './taskdisplay/taskdata.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { TaskResolved } from './taskdisplay/task';

@Injectable({
  providedIn: 'root'
})
export class TaskResolverService implements Resolve<TaskResolved>{

  constructor(private _data:TaskdataService) {}
  resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<any>{
    return this._data.getAllTasks().pipe(
      map(x=>({task:x,errormsg:''})),
      catchError(error=>{
        console.log(error);
        return of({task:null,errormsg:'Something went wrong'})
      })
    );
    }
   }

