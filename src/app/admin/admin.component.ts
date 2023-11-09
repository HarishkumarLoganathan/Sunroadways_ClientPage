import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  city_location!:string
  branch!:string
  branch_email!:string
  branch_password!:string
  constructor(private router: Router)
  {


  }
  


  cloc = ["Chennai", "Bangalore", "Coimbatore"];

  Branches = {
    'Chennai': ['Ambattur','Vellapanchavadi','Wall Tax Road'],
    'Bangalore': ['Bommasandra','Chamarajpet','Peenya'],
    'Coimbatore': ['Saravanmpatti','Sarasdfd'],
  
  };



  BranchLoginSubmit()
  {



  }

  forgetpassword()
  {
  this.router.navigate(['/forgetpassword']);
}

}
