import { Component } from '@angular/core';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent {

usr_id:string|null="invalid user"
Lr_Number!:string
Order_Ref!:string
From!:string
To!:string
Delivery_Status!:string
Payment_Ingo!:string
dummy!:string
Delivered_Time!:string
Package_Count!:string
Start_Date!:Date
End_Date!:Date
date_flag!:string

items=[1,2,3]






Order_hist: {[key: string]: string} = {};




  ngOnInit()
  {
this.usr_id=localStorage.getItem('usr_id')

if (this.Start_Date==null)
{
this.date_flag="N";

}

if (this.usr_id !== null && this.date_flag=="Y")
{
this.OrderHistory(this.usr_id)

}

if (this.usr_id !== null && this.date_flag=="N")
{
this.OrderHistoryFilter(this.usr_id,this.Start_Date,this.End_Date)

}

  console.log("function call")
  
  

  }


  OrderHistory(usr_id:string)

  {
    console.log("inside function")
    console.log(usr_id)
  
if (usr_id =="17254")
{
console.log("Hello")

this.Order_hist['Lr_Number']="7654312";
this.Order_hist['Order_Ref']="3423991"
this.Order_hist['From']="Chennai"
this.Order_hist['To']="Bangalore"
this.Order_hist['Delivery_Status']="In Transit"
this.Order_hist['Payment_Info']="To be paid"
this.Order_hist['Delivered_Time']="26-05-2022 14:08:00"
this.Order_hist['Package_Count']="236"
this.dummy="Dummy"





}




  
    
  }

  OrderHistoryFilter(usr_id:string,Start_Dat:Date,End_Date:Date)
  {

    

  }
  


  validatedate()
  {
  
  
  }







}
