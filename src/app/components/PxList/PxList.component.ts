import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'px-list',
  templateUrl: './PxList.component.html',
  styleUrls: ['./PxList.component.css']
})
export class PxListComponent{
    @Input() users: Array<any>;
  
}