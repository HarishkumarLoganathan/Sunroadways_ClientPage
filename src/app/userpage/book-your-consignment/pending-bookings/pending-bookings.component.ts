import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormArray, FormControl,FormsModule,Validators } from '@angular/forms';

@Component({
  selector: 'app-pending-bookings',
  templateUrl: './pending-bookings.component.html',
  styleUrls: ['./pending-bookings.component.css'],
  standalone:true,
  imports:[FormsModule,ReactiveFormsModule,CommonModule]
})
export class PendingBookingsComponent {

  username!:string
  email!:string
  password!:string
  loc=["Chennai","Coimbatore","Bangalore"]
loc_branch=[{"Chennai":["Ambattur","Vanagaram","Walltax Road"],"Bangalore":["Bommasandra","Chamarajpet","Peenya"],"Coimbatore":["Saravanmpatti"]}]

myForm: FormGroup;

constructor(private fb: FormBuilder) {
  this.myForm = this.fb.group(this.getStudentFields()
    // Define your form controls here
    
  );

}

getStudentFields():FormGroup{
  return this.fb.group({

  username: new FormControl(['', [Validators.required, Validators.minLength(4)]]),
  email: new FormControl( ['', [Validators.required, Validators.email]]),
  password: new FormControl ( ['', [Validators.required, Validators.minLength(6)]])
}) as FormGroup;
}

onSubmit() {
  if (this.myForm.valid) {
    // Form is valid, handle submission here
    console.log(this.myForm.value);
  }
}

}