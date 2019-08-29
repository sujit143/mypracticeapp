import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from "./product";
import { ProductdataService } from "./productdata.service";

@Component({
  selector: 'app-productdisplay',
  templateUrl: './productdisplay.component.html',
  styleUrls: ['./productdisplay.component.css']
})
export class ProductdisplayComponent implements OnInit {
arr:Product[]=[];
name:string="watch";
productres;
errormsg:string;
  constructor(private _data:ProductdataService,private _router:Router, private act:ActivatedRoute) {
    this.productres=this.act.snapshot.data['productdata'];
   }

  ngOnInit() {
    this.arr=this.productres.product;
    this.errormsg=this.productres.errormsg;

  }
  onProductDelete(item:Product){
this._data.deleteproduct(item.pro_id).subscribe((data:any)=>{
  this.arr.splice(this.arr.indexOf(item),1);
  alert("deleted");
});
}
onProductEdit(item:Product){
  this._router.navigate(['/productdisplay/editproduct',item.pro_id]);
}
  }











