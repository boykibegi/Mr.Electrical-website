import { Component } from '@angular/core';
import { signin} from '../model/signin.model';
import { EndpointsService } from '../endpoints.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
    user:signin={ 
      email:'',
      password:''
  }

  constructor(private endpointService:EndpointsService,private route:Router){
    this.user
  }


  signIn(user:signin){
      return this.endpointService.signIn(user).subscribe(()=>{this.route.navigate(['../dashboard'])})
  }
}
  