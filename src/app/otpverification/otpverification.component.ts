import { Component } from '@angular/core';

@Component({
  selector: 'app-otpverification',
  templateUrl: './otpverification.component.html',
  styleUrls: ['./otpverification.component.css']
})
export class OtpverificationComponent {

  otpCode!:number;
  otpCodeArray=[6,5,4,3,2,1];
  update_flag:boolean=false;


  update_password()
  {

    console.log("Password has been updated...!");
    this.update_flag=true;



  }

}
