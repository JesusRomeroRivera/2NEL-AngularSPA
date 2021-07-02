import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'px-button',
  templateUrl: './PxButton.component.html',
  styleUrls: ['./PxButton.component.css']
})
export class PxButtonComponent {
    @Input() color: string;
    @Output() customClick: EventEmitter<any> = new EventEmitter();

    buttonColor: "black"
    
    buttonClick() {
        this.customClick.emit();
    }

}
