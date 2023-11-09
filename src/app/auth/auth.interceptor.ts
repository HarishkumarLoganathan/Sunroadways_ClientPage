import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   
   
    const refresh_token =localStorage.getItem('refresh_token');
  
    const accessToken =  localStorage.getItem('access_token');  // Replace with your actual refresh token

    // Clone the request and add the Authorization header with the access token
    if (accessToken) {
      console.log(request)
      console.log("IM GONNA WIN")
      
      request = request.clone({
        setHeaders: {
          Authorization: ` ${accessToken}`
        }
      });
      console.log(request)
    }
   
   // return next.handle(request);
   return next.handle(request).pipe(
    // Handle the response
    map((response: HttpEvent<any>) => {
      // Check if the response is an instance of HttpResponse
      if (response instanceof HttpResponse) {
        // Check if the response has status code 299
        if (response.status === 299) {
          // Extract the new access token from the response headers
          
        
          const newAccessToken = response.headers.get('new_access');
          console.log(newAccessToken)

          if (newAccessToken) {
            // Update the access token in the session storage
            sessionStorage.setItem('access_token', newAccessToken);
          }
        }
      }

      return response;
    })
  );
}
}







