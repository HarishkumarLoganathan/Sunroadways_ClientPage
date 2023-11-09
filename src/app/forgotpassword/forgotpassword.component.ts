import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {


client_flag:boolean=false;
admin_flag:boolean=false;
branch_flag:boolean=false;

  user_info!:string;
  branch_email!:string;
  client_email!:string
  admin_email!:string
  confirmnew_password!:string
  new_password!:string
  branch!:string
  city_location!:string
  cloc = ["Chennai", "Bangalore", "Coimbatore"];

  Branches = {
    'Chennai': ['Ambattur','Vellapanchavadi','Wall Tax Road'],
    'Bangalore': ['Bommasandra','Chamarajpet','Peenya'],
    'Coimbatore': ['Saravanmpatti','Sarasdfd'],
  
  };

  constructor(private router: Router)
  {


  }
  forgetpassword()
  {
    console.log("ROUTING")
    this.router.navigate(['/otpverification']);
  }

  flaguserinfo()
  {


    if(this.user_info=="Client")
    {
      console.log("client flag update")

      this.client_flag=true;
      this.branch_flag=false;
      this.admin_flag=false;
    }
    if(this.user_info=="Branch")
    {
      console.log("client flag update")
      this.client_flag=false;
      this.branch_flag=true;
      this.admin_flag=false;
    }
    if(this.user_info=="Admin")
    {
      console.log("client flag update")

      this.client_flag=false;
      this.branch_flag=false;
      this.admin_flag=true;
    }

  }


}
