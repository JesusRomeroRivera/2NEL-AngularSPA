import {Component, EventEmitter, Input, Output} from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'px-ancle-list',
  templateUrl: './PxAnclesList.component.html',
  styleUrls: ['./PxAnclesList.component.css']
})
export class PxAnclesListComponent{
    @Input() users: Array<any>;
  
    constructor(private routes: Router){

    }
}