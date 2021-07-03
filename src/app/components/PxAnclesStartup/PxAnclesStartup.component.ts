import {Component, EventEmitter, Input, Output} from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'px-ancle-startup',
  templateUrl: './PxAnclesStartup.component.html',
  styleUrls: ['./PxAnclesStartup.component.css']
})
export class PxAnclesStartupComponent{
    @Input() users: Array<any>;
  
    constructor(private routes: Router){

    }
}