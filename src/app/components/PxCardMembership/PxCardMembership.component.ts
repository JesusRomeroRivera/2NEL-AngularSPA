import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'px-card-membership',
  templateUrl: './PxCardMembership.component.html',
  styleUrls: ['./PxCardMembership.component.css']
})
export class PxCardMembershipComponent{

  @Input()title: string;

  buttonBlack: "black"

  get getCost() {
    let cost = 0;
    if (this.title == "Pro") cost = 3;
    if (this.title == "Premium") cost = 5;
    return `${this.title} ${cost}$`;
  }
}
