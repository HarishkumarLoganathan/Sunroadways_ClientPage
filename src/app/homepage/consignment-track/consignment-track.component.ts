import { Component } from '@angular/core';

@Component({
  selector: 'app-consignment-track',
  templateUrl: './consignment-track.component.html',
  styleUrls: ['./consignment-track.component.css']
})
export class ConsignmentTrackComponent {

response!:string
flag!:boolean
LRflag!:boolean
Booking_Date!:string
From!:string
To!:string
Package_Count!:string
Delivery_Type!:string
Consignment_At!:string
Consignment_time!:string
Delivery_Status!:string
Delivered_Date!:string
Delivered_Time!:string
Booking_details: {[key: string]: string} = {};
Delivery_details: {[key: string]: string} = {};
LR_Number!:string






  toggletrackConsignment()
  {


    console.log("INITIATING TRACKING SERVICE");
    this.response="tracking sevice intiated"

    if (this.LR_Number =="9010964752")
    {
    this.flag=true;
    console.log(this.flag)
    console.log("FLAG")


    this.Booking_details['Booking_Date']="19-05-2022";
    this.Booking_details['From']="Chennai";
    this.Booking_details['To']="Noida";
    this.Booking_details['Package_Count']="236";
    this.Booking_details['Delivery_Type']="Door";


    this.Delivery_details['Consignment_At']="NOIDA B";
    this.Delivery_details['Consignment_time']="26-05-2022 12:16:00";
    this.Delivery_details['Delivery_Status']="DELIVERED";
    this.Delivery_details['Delivered_Date']="26-05-2022 14:08:00";
    this.Delivery_details['Delivery_Type']="Door";
    this.LRflag=false;


    
    }

    else
    {

      this.LRflag=true;
      this.flag=false;
    }

    


    
  }
  toggletrackConsignment_Invoice()
  {


    console.log("INVOICE TRACKING SERVICE");

  

    
  }
  toggletrackConsignment_OrderRef()
  {


    console.log("ORDER_REF SERVICE");


    
  }

}
