import { Component } from '@angular/core';
import { Product } from '../model/product.model';
import { EndpointsService } from '../endpoints.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  products:Product[]

  constructor(private endpointService:EndpointsService){
    this.products = []
  }

  ngOnInit(){
    this.endpointService.readProducts().subscribe((data)=>{
      console.log(data)
      this.products = data as Product[]

    })
  } 
}
