import { Injectable } from '@angular/core';
import { ProductdataService } from './productdisplay/productdata.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { productResolved } from './productdisplay/product';
@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<productResolved>{

  constructor(private _productdata:ProductdataService) { }
resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<any>{
  return this._productdata.getAllProducts().pipe(
    map(x=>({product:x,errormsg:''})),
    catchError(error=>{
      return of({product:null,errormsg:'Something went wrong'})
    })
  );
  }




}
