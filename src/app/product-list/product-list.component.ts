import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { FormGroup, FormBuilder, Validators } 
from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers:[ProductService]
})
export class ProductListComponent implements OnInit {
  product:Product;//one product
  productList:Product[];//array of product
  productForm: FormGroup;//binding form 
  submitted:boolean=false;
  constructor(private formBuilder: FormBuilder,
    private router: Router) { }
  ngOnInit() {    //
    this.productForm = this.formBuilder.group({
      productId:['111',[
        Validators.required
        ,Validators.pattern('[1-9]{1,3}')]],
      productName: ['Mobile',[
        Validators.required
        ,Validators.pattern('[A-Z][a-z]{3,20}')]],
      productPrice:['5000',[
        Validators.required, 
        Validators.maxLength(6)]]
    });
  }
  onSubmit(){
    console.log("H! : "+JSON.stringify(this.productForm.value));
    this.submitted = true;
    if(this.productForm.invalid){
      return;
    }
    this.product=Object.assign(this.product,this.productForm.value);
    console.log("product: "+this.product);
    }
  
}
