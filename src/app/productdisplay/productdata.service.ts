import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductdataService {
url:string="https://nodejsapidemo.herokuapp.com/products/";
  constructor(private _http:HttpClient) { }

getAllProducts() {
  return this._http.get(this.url);
}
getProductById(pro_id){
return this._http.get(this.url+pro_id);
}
deleteproduct(pro_id){
  let head = new HttpHeaders().set("Content-Type", "application/json");
  return this._http.delete(this.url + pro_id, { headers: head });
}
editProduct(newproduct){
  let head = new HttpHeaders().set("Content-Type", "application/json");
  let body = JSON.stringify(newproduct);
  return this._http.put(this.url + newproduct.pro_id, body, {headers: head});
}

}
