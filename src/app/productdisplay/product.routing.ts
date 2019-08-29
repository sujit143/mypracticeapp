import { Routes, RouterModule } from "@angular/router";
import { ProductResolverService } from '../product-resolver.service';
import { ProductdisplayComponent } from './productdisplay.component';
import { EditproductComponent } from './editproduct/editproduct.component';



const arr:Routes=[
 {path:'', children:[
  {path:'',resolve:{productdata:ProductResolverService},component:ProductdisplayComponent},
  {path:'editproduct/:pro_id',component:EditproductComponent}
 ]},

];
export const productrouting=RouterModule.forChild(arr);
