
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  countryList: country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];
 
  contact: contact;
 
  ngOnInit() {
 
    this.contact = {
      firstname: "Smita",
      lastname: "Kumar",
      email: "smitabrijesh@gmail.com",
      gender: "female",
      isMarried: true,
      country: "2",
      address: { city: "Mumbai", street: "Sector 8A", pincode: "400708" }
    };
 
  }
 
  onSubmit(contactForm :NgForm) {
    console.log(this.contact);
  }
 
  setDefaults() {
    this.contact = {
      firstname: "Sachin",
      lastname: "Tendulkar",
      email: "sachin@gmail.com",
      gender: "male",
      isMarried: true,
      country: "2",
      address: { city: "Mumbai", street: "Perry Cross Rd", pincode: "400050" }
    };
  }
 
  changeCountry() {
    this.contact.country = "1";
  }
 
  reset(contactForm :NgForm) {
    contactForm.resetForm();
  }
 
}
 
export class contact {
  firstname: string;
  lastname: string;
  email: string;
  gender: string;
  isMarried: boolean;
  country: string;
  address: {
    city: string;
    street: string;
    pincode: string;
  }
}
 
 
export class country {
  id: string;
  name: string;
 
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}