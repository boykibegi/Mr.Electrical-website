import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './model/user.model';
import { signin } from './model/signin.model';
import { Product } from './model/product.model';
import { searchP } from './model/searchP.moedl';
import{map} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EndpointsService {
   host = 'http://localhost:3000';
  constructor(private http:HttpClient) { }
  
  readUser(){
    return this.http.get<User[]>(`${this.host}/auth/users`,).pipe(map((res)=> res))
  }

  signUp(user:User){
       
    return this.http.post(`${this.host}/auth/signup`, user)
   }
  
  signIn(user:signin){
    return this.http.post(`${this.host}/auth/signin`,{email:user.email,password:user.password})
  } 

  readProducts(){
    return this.http.get<Product[]>(`${this.host}/product/goods`).pipe(map((res)=> res ))
  }
  addProduct(product:Product){
    return this.http.post(`${this.host}/product/item`,product)
  }

  searchProduct(searchp:searchP){
    return this.http.get(`${this.host}/product/good`).pipe(map((res)=> res))
  }
}
