import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductdataService } from '../productdata.service';


@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
 edit: FormGroup;
 pro_id:number;
 displayProduct:Product;

  constructor(private _actroute:ActivatedRoute,private _productdata:ProductdataService,private fb:FormBuilder,private _router:Router) { }

  ngOnInit() {
  this.pro_id=this._actroute.snapshot.params["pro_id"];
  this._productdata.getProductById(this.pro_id).subscribe((data:Product[])=>{
    this.displayProduct =data[0];
    this.edit.patchValue({
pro_id:this.displayProduct.pro_id,
pro_desc:this.displayProduct.pro_desc,
pro_qty:this.displayProduct.pro_qty,
pro_mfg:this.displayProduct.pro_mfg,
pro_img:this.displayProduct.pro_img
    });
  });
  this.edit=this.fb.group({
    pro_id:new FormControl(null,Validators.required),
    pro_desc:new FormControl(null,Validators.required),
    pro_qty:new FormControl(null),
    pro_mfg:new FormControl(null),
    pro_img:new FormControl(null),


  });

  }
  onEditProduct(){
    this._productdata.editProduct(this.edit.value).subscribe(
      (data:any)=>{
          this._router.navigate(['productdisplay']);
          alert("updated");

        }
       );
        }

        }
