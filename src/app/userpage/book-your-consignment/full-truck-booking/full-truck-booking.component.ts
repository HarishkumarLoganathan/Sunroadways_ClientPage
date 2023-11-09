import { Component,ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import {HttpHeaders} from '@angular/common/http'


@Component({
  selector: 'app-full-truck-booking',
  templateUrl: './full-truck-booking.component.html',
  styleUrls: ['./full-truck-booking.component.css']
})
export class FullTruckBookingComponent {

constructor(public el:ElementRef,public http:HttpClient){


}



  pickup_location!:string
  pickup_branch!:string
  drop_location!:string
  delivery_branch!:string
  total_consignment!:string
  total_weight!:number
  total_article!:number
  vehicle_type!:string
  pickup_time!:Date





   loc=["Chennai","Coimbatore","Bangalore"]
   Branches = {
    'Chennai': ['Ambattur','Vellapanchavadi','Wall Tax Road'],
    'Bangalore': ['Bommasandra','Chamarajpet','Peenya'],
    'Coimbatore': ['Saravanmpatti','Sarasdfd'],
  
  };
   Vehicle=['Mini Truck','407','17 feet','20 feet']




   blindManifestbooking(blindmanifestform: NgForm) {
    // Get the form data as an object

    const formData = blindmanifestform.value;
  
    // Add the 'client_id' property to the form data object
    const client_id = localStorage.getItem('usr_id');
    formData.client_id = "BEERAEE225";
  
    // Convert the updated object to JSON
    const jsonData = JSON.stringify(formData);
    
    // Now you have the JSON data with the 'client_id' property
    console.log(jsonData);
  


    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };





  this.http.post('http://127.0.0.1:8000/BlindManifest/BlindManifestBooking/', jsonData,httpOptions)
  .subscribe(
    response => {

      console.log(response)
    
    },
    error => {
  
      console.error('Login error:', error);


      // Handle the error response
    }
  );

  }




   }



