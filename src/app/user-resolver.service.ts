import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserdataService } from './userdisplay/userdata.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserResolved } from './userdisplay/user';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<UserResolved>{

  constructor(private _userdata:UserdataService) { }
  resolve(next:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<any>
  {
    return this._userdata.getAllUsers().pipe(
      map(x=>({data:x,errormsg:''})),
    catchError(error=>{
      console.log(error);
      return of({User:null,errormsg:'Something went wrong'});
    })
  );
  }

  }

