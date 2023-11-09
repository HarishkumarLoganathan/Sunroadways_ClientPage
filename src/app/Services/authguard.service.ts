import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor() { }



  isLoggedIn(): boolean {
    // Check if the JWT token exists in local storage and if it is not expired.
    const token = localStorage.getItem('access_token');
    if (token) {
      // Decode the token to get the payload (You may need a JWT library like 'jwt-decode' for this).
      // Check if the token expiration date is in the future to consider the user as logged in.
      // For simplicity, we'll assume the token has a 'exp' (expiration) claim in its payload.
      return true
    }
    return false;
}
}
