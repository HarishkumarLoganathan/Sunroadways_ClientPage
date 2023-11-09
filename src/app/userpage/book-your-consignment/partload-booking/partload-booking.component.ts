  import { Component } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormBuilder, FormGroup, ReactiveFormsModule, FormArray, FormControl,FormsModule,Validators,AbstractControl } from '@angular/forms';
import { end } from '@popperjs/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient,HttpHeaders} from '@angular/common/http';


  @Component({
    selector: 'app-partload-booking',
    standalone:true,
    templateUrl: './partload-booking.component.html',
    styleUrls: ['./partload-booking.component.css'],
    imports:[ReactiveFormsModule,CommonModule,NgbModule,FormsModule]
  })
  export class PartloadBookingComponent {



pickup_location!:any
pickup_branch!:string
delivery_location!:string
delivery_branch!:string
delivery_type!:string
article_count!:number
consignment_weight!:number
consignee_name!:string
consignee_gst!:string
consignee_email!:string
delivery_address!:string
delivery_area!:string
delivery_pincode!:number
delivery_contact!:number
invoice_number!:string
ewaybill_number!:string
name!:any
client_id!:string

loc=["Chennai","Coimbatore","Bangalore"]
loc_branch={"Chennai":["Ambattur","Vanagaram","Walltax Road"],"Bangalore":["Bommasandra","Chamarajpet","Peenya"],"Coimbatore":["Saravanmpatti"]

}








    studentForm: FormGroup;
    
    currentPage=1
    pageSize=1
    list!:any
    startIndex!:number
    endIndex!:any
array=["SURESH","RAMESH","DINESH"]
    constructor(private fb: FormBuilder,private http:HttpClient) {
      this.studentForm = this.fb.group({
        studentList: this.fb.array([this.getStudentFields()])
      });

    
    }

numberregex(control: AbstractControl)
{

  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!pattern.test(control.value)) {
    return { invalidnumber: true };
  }
  return null;

}

    getStudentFields(): FormGroup {
      return this.fb.group({
        pickup_location: new FormControl("",[Validators.required]),
        pickup_branch:['',Validators.required],
        drop_location:['',Validators.required],
        delivery_branch:['',Validators.required],
        article_count:['',[Validators.required,Validators.pattern('^[1-9][0-9]*$')]],
        consignment_weight:['',[Validators.required,Validators.pattern('^[1-9][0-9]*$')]],
        delivery_type:['',Validators.required],
        consignee_name:['',Validators.required],
        consignee_GST:['',[Validators.required,Validators.pattern('^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$')]],
        consignee_email:['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
        delivery_address:['',Validators.required],
        delivery_area:['',Validators.required],
        delivery_pincode:['',[Validators.required,Validators.pattern('^[1-9][0-9]{5}$')]],
        delivery_contact:['',[Validators.required,Validators.pattern('^[0-9]{10}$')]],

        
        

        
        studentSubjects: this.fb.group({
          studentSubjectArray: this.fb.array([this.putNewInvoice()]),
        }),

      });
    }
    putNewInvoice() {
      return new FormGroup({
        ewaybill_number: new FormControl(""),
        invoice_number: new FormControl(""),
      });
    }

    get studentListArray() {

     
      return this.studentForm.get('studentList') as FormArray;

    }
    get currentPageForms() {
      this.startIndex = this.currentPage * this.pageSize -1;// 0*1 =0
      this.endIndex = this.startIndex + this.pageSize;//1
      

     

      
      return (this.studentListArray.controls.slice(this.startIndex, this.endIndex));
    }
    getControlValue(currentPage: number,controlName: string) {
      const control = this.studentForm.get(['studentList', currentPage, controlName]);;
     
      return control ? control.value : null;
    }

    getControl(currentPage: number,controlName: string) {
      const control = this.studentForm.get(['studentList', currentPage, controlName]);;
    
      return control;
    }
 
   


 
    addStudent() {
      this.studentListArray.push(this.getStudentFields());
    }

    removeStudent(index: number) {
      this.studentListArray.removeAt(index);
    }


    subjectsFormGroup(i: number) {
      return this.studentListArray.at(i).get("studentSubjects") as FormGroup;
    }
  
    subjectsArray(i: number) {
      return this.subjectsFormGroup(i).get("studentSubjectArray") as FormArray;
    }
  
    addNewSubject(i: number) {
      this.subjectsArray(i).push(this.putNewInvoice());
    }
  
    removeNewSubject(i: number, j: number) {
      this.subjectsArray(i).removeAt(j);
    }

    getFormData(studentForm:any) {
     
     
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

      const formData = studentForm.value;
  
      // Add the 'client_id' property to the form data object
     // const client_id = localStorage.getItem('usr_id');
      formData.client_id = "BEERAEE225";
    
      // Convert the updated object to JSON
      const jsonData = JSON.stringify(formData);
      

      this.http.post('http://127.0.0.1:8000/PartialManifest/PartialManifestBooking/', jsonData,httpOptions)
      .subscribe(
        response => {
  
          console.log(response)
        
        },
        error => {
      
          console.error('Login error:', error);
  
  
          // Handle the error response
        }
      );

    }
  }
