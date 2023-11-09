
import { Component } from '@angular/core';
import { Branches } from 'src/app/mock_branch';
import { Branch } from 'src/app/Branch';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-branch-details',
  templateUrl: './branch-details.component.html',
  styleUrls: ['./branch-details.component.css']
})
export class BRANCHDETAILSComponent {

function_start='toggle';
function_end='branches()'
Cities = [
 
  { title: 'Chennai', title_btn:'CNI BRANCHES',body: 'We do deliver the consignments next day from Bangalore to Chennai,Coimbatore and Hyderabad', imageUrl: 'assets/Chennai.jpg', bgcolor:'card text-white bg-warning mb-3'},
  { title: 'Bangalore',title_btn:'BLR BRANCHES', body: 'We do deliver the consignments next day from Chennai to Coimbatore and second day to Hyderabad', imageUrl: 'assets/Bangalore.jpg',bgcolor:"card text-white bg-danger mb-3" },
  { title: 'Coimbatore', title_btn:'CBT BRANCHES',body: 'We do deliver the consignments next day from Coimbatore to Chennai,Bangalore and Hyderabad', imageUrl: 'assets/Coimbatore.jpg',bgcolor:"card text-white bg-success mb-3" },
  { title: 'Hyderabad', title_btn:'HYD BRANCHES',body: 'We do deliver the consignments next day from Coimbatore to Chennai,Bangalore and Hyderabad', imageUrl: 'assets/Hyderabad.jpg',bgcolor:"card text-white bg-info mb-3" }
  // Add more items as needed
];


 Branches=[
  { Area:'Ambattur', Branch_Incharge:' Mr. Manoj Kumar L', Contact_Info:'9566056472',Branch_Address:' 23, Menambedu Road, Near State Bank Of India, Ambattur, Chennai, Tamil Nadu 600058'},
  { Area:'Vanagaram', Branch_Incharge:'Mr. Babu', Contact_Info:'9380158318',Branch_Address:' Thiruverkadu, Chennai, Tamil Nadu 600077'},
  { Area:'Waltax-Road', Branch_Incharge:'Mr. Mouli', Contact_Info:'9380164056',Branch_Address:' 23, Beside Central station, Near State Bank Of India, Waltax Road, Chennai, Tamil Nadu 600001'}
]



branch="";

constructor(private modalservices:NgbModal){}



  togglebranches(MyModalComponent:any,id:any)
  {


    if (id==="Chennai")
    {
    console.log("BLR BRANCHES");

    
    this.branch="Chennai";
    
    this.modalservices.open(MyModalComponent,{ scrollable: true })

    }
    else if(id==="Bangalore")
    {

      console.log("BLR BRANCHES");

    
      this.branch="Bangalore";
      
      this.modalservices.open(MyModalComponent,{ scrollable: true })

    }

    else if(id === "Coimbatore")
    {
      console.log("BLR BRANCHES");

    
      this.branch="Comibatore";
      
      this.modalservices.open(MyModalComponent,{ scrollable: true })

    }

    else if(id==="Hyderabad")

    {


      console.log("BLR BRANCHES");

    
      this.branch="Hyderabad";
      
      this.modalservices.open(MyModalComponent,{ scrollable: true })

    }
    
  }


}
