import { Component,EventEmitter,Input,Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})



export class ButtonComponent {

  @Input() text:string | undefined;
  @Input() color:string | undefined;
  @Input() clsname:string | undefined;
  @Input() toggle:string | undefined;
  @Input() target:string | undefined;
  @Input() fun:string | undefined;
  @Output() btnClick= new EventEmitter()


onClick()

{

  this.btnClick.emit()
}
  



}
