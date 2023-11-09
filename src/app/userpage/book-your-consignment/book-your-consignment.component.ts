import { Component, NgModule } from '@angular/core';
import { TemplateRef } from '@angular/core';
import {  Validators } from '@angular/forms';

import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import {HttpClient,HTTP_INTERCEPTORS,HttpHeaders, HttpResponse} from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';





@Component({
  selector: 'app-book-your-consignment',
  templateUrl: './book-your-consignment.component.html',
  styleUrls: ['./book-your-consignment.component.css'],
  
  
})


export class BookYourConsignmentComponent {
  title = 'sidenav';

}
