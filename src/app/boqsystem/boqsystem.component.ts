import { Component, OnInit } from '@angular/core';
import { EndpointsService } from '../endpoints.service';
import { User } from '../model/user.model';
import { Router,ActivatedRoute } from '@angular/router';





@Component({
  selector: 'app-boqsystem',
  templateUrl: './boqsystem.component.html',
  styleUrls: ['./boqsystem.component.css']
  
})
 

export class BoqsystemComponent{
    
  users:User[] 

  user:User = {
    firstName:'',
    lastName:'',
    email:'',
    password:''
  }
    
    constructor (private endpointService:EndpointsService,private router:Router ){ 
      this.users=[]
      this.user 
    }  
    
    
    ngOnInit(){
      this.endpointService.readUser().subscribe((data)=>{
        console.log(data)
        this.users = data as User[]

      })
    }
    addUser(user:User){
        this.endpointService.signUp(user).subscribe( ()=>{
          this.router.navigate(['../signin'])
        })
        this.user = {
          firstName:'',
          lastName:'',
          email:'',
          password:''

        }
      };
    
} 
