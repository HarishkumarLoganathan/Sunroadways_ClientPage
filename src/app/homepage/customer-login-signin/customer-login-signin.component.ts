import { Component,ViewChild } from '@angular/core';
import { FormGroup,FormControl, FormControlName } from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient,HTTP_INTERCEPTORS,HttpHeaders, HttpResponse} from '@angular/common/http';
import {UserpageComponent} from '../../userpage/userpage.component'
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthInterceptor } from '../../auth/auth.interceptor';







@Component({
  selector: 'app-customer-login-signin',
  templateUrl: './customer-login-signin.component.html',
  styleUrls: ['./customer-login-signin.component.css'],
  providers:[ { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
})




export class CustomerLoginSigninComponent  {



  constructor(private router: Router,private http:HttpClient,private modalservices:NgbModal)
  {


  }
  
  

  showModal: boolean = false;
  responsemodal!:any
  responseMessage!:any
  login_email!: string;
  login_password!: string;
  login_mobile!:number;
  submittedData!: string;
  company_name!:string;
  company_gst!:string;
  signin_email!:string;
  signin_password!:string;
  signin_mobile!:string
  username!:string
  name!:string
  id!:string
  response_data!:any
  login_detail!:any;
  userLocation!:Location
  company_pincode!:number
  company_city!:string
  company_area!:string
  company_address!:string





 


 myValue = 'Hello from ParentComponent';



  onLoginSubmit(modal:any,login:NgForm)
  {

    const jsonData = JSON.stringify(login.value);
    console.log(jsonData)
    this.http.post('http://127.0.0.1:8000/CustomerLogin/ClientLogin/', jsonData)
    .subscribe(
      response => {

        
        this.response_data=response;
        this.login_detail= JSON.stringify(response);



        const data=JSON.parse(this.login_detail)
        console.log(data)
        console.log(data.Client_id)
        console.log(data.Client_name)
       
       


        login.resetForm();

        localStorage.setItem('usr_name', data.Client_id);
        localStorage.setItem('usr_id',data.Client_id);
        localStorage.setItem('refresh_token',data.refresh);
        localStorage.setItem('access_token',data.access);
        
        this.router.navigate(['/user']);
       
       
        // Handle the successful response
      },
      error => {
        this.responseMessage = JSON.stringify(error.error.error);
        this.modalservices.open(modal,{ size: 'xl' })
        console.error('Login error:', error);


        // Handle the error response
      }
    );







  }
  onSignupSubmit(sucess:any,modal:any,signin:NgForm)
  {

 console.log(signin.value)
    const jsonData = JSON.stringify(signin.value);
    console.log(jsonData)
    this.http.post('http://127.0.0.1:8000/CustomerLogin/ClientSignin/', jsonData)
    .subscribe(
      response => {
        console.log('Login success:', response);

        signin.resetForm();
       
        this.responseMessage = JSON.stringify(response);
        this.modalservices.open(sucess,{ size: 'l' })
        // Handle the successful response
      },
      error => {
        this.responseMessage = JSON.stringify(error.error.error);
        this.modalservices.open(modal,{ size: 'xl' })
        console.error('Login error:', error.value);


        // Handle the error response
      }
    );


  }

 



 onCloseModal() {
    this.showModal = false;
  }


}


