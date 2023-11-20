import { Component ,OnInit} from '@angular/core';
import { Product } from '../model/product.model';
import { EndpointsService } from '../endpoints.service';
import { DataTablesModule } from 'angular-datatables';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products:Product[]
  dtoptions:DataTables.Settings={}

  constructor(private endpointService:EndpointsService){
    this.products = []
    
  }

  ngOnInit(){
    this.dtoptions={
      pagingType:'full_numbers'
    }
    this.endpointService.readProducts().subscribe((data)=>{
      console.log(data)
      this.products = data as Product[]

    })
  } 

 

}
