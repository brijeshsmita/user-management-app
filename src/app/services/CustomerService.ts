import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
    baseUrl:string="http://localhost:3000";
  constructor(private http:HttpClient) { }

  //I want to get all customer list from server by hitting webservice
  //http://localhost:3000/customers
  //HTTP protocol spefic method is provided by HttpClient
  // Get All Customers - return list of customers
  getCustomers(){
    return this.http.get<Customer[]>(this.baseUrl+"/customers");
    //http://localhost:3000/customers
  }

  //HTTP protocol spefic method is provided by HttpClient we are using get() method
  // Get  Customer - return customer on the basis of id passed
  getCustomerById(customerId:number){
    return this.http.get<Customer>(this.baseUrl+"/customers/"+customerId);
    //http://localhost:3000/customers/101
  }

  //HTTP protocol specific method is provided by HttpClient we are using post() method
  // Add  Customer - return customer object which added
  addCustomer(customer:Customer){
    return this.http.post(this.baseUrl+"/customers/add",customer);//json object of customer
    //http://localhost:3000/customers/add
  }

   //HTTP protocol specific method is provided by HttpClient we are using put() method
  // Add  Customer - return customer object which added
  updateCustomer(customer:Customer,customerId:number){
    return this.http.put(this.baseUrl+"/customers/update/"+customerId,customer);//json object of customer
    //http://localhost:3000/customers/update/101
  }

  //HTTP protocol spefic method is provided by HttpClient we are using get() method
  // Get  Customer - return customer on the basis of id passed
  deleteCustomerById(customerId:number){
    return this.http.delete(this.baseUrl+"/customers/delete/"+customerId);
    //http://localhost:3000/customers/delete/101
  }
}
export class Customer{
    customerId:number;
    customerName:string;
    email:string;
    mobile:string;
}