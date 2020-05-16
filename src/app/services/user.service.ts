import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
//use Injectable decorator when our service is dependent on another service
@Injectable({
  providedIn: 'root'
})
export class UserService {
//constructor
  constructor(private http:HttpClient) { }//HTTP client will call webservice/ backend API
  baseUrl:string = 'http://localhost:3000/users';//url of my backend api

  // Get All Users
  getUsers(){
    return this.http.get<User[]>(this.baseUrl);
    //http://localhost:3000/users
  }

  // Get User By Id
  getUserById(id: number){
    return this.http.get<User>(this.baseUrl+'/'+id);//id is appended to base Url
    //http://localhost:3000/users/101
  }

  // Create User
  createUser(user: User) {
    return this.http.post(this.baseUrl, user);//Object is send as a json object
    //http://localhost:3000/users 
    /* in request body using json format
    user{
      id:199,.....
    }
    */
  }

  // Modify User
  updateUser(user: User) {
    return this.http.put(this.baseUrl + '/' + user.id, user);
    //http://localhost:3000/users/101
    /* in request body using json format
    user{
      id:101,.....
    }
    */
  }

  // Delete User
  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
     //http://localhost:3000/users/101
  }

}
