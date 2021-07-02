import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'px-membership',
  templateUrl: './PxMembership.component.html',
  styleUrls: ['./PxMembership.component.css']
})
export class PxMembershipComponent{

  @Input()numberImg: string;
  @Input()title: string;
  @Input()text: string;

  buttonColor: "black"
}

