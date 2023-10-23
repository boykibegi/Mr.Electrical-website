import { Component } from '@angular/core';
import { Product } from '../model/product.model';
import { EndpointsService } from '../endpoints.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
   product:Product={
    description:'',
    Quantity:'',
    amount:''
   }
  constructor(private endpointService:EndpointsService,private router:Router){
    this.product
  }

  newProduct(product:Product){
   
    this.endpointService.addProduct(product).subscribe( ()=>{
      this.router.navigate(['../dashboard'])
    })
  }
}
