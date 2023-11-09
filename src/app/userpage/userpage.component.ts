import { Component ,Input} from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})


export class UserpageComponent {
usr_name!:string|null;
usr_id!:string|null;


constructor(private router: Router)
{
 this.usr_name=localStorage.getItem('usr_name')
 this.usr_id=localStorage.getItem('usr_id')

}

ngOnInit(): void {
  // Check if the user is already authenticated
  const accessToken = localStorage.getItem('access_token');
  console.log(accessToken)

  if (accessToken) {
    console.log("TOKENACCESS")
    try {
      const decodedToken: any = jwt_decode(accessToken);
      const expirationTime = decodedToken.exp * 1000; // Convert to milliseconds
      console.log(expirationTime)
      const currentTime = Date.now();
      console.log(currentTime)

      if (currentTime < expirationTime) {
        // Token is still valid, redirect to a protected page
        console.log("VALID TOKEN")
        //this.router.navigate(['/protected-page']);
      }

      else{

       console.log("INVALID TOKEN")

      }
    } catch (error) {
      // Token decoding failed, handle the error or redirect to login page
      console.error('Token decoding failed:', error);
    }
  }
}

userdetails(name:string,id:string){
  




/*console.log(this.usr_name,this.usr_id)
console.log("success")*/



}



}
