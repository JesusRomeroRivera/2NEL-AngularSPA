import {Component, Input, OnInit} from '@angular/core';
interface InfoMessage {
  isButton: boolean,
  isText: boolean,
  imageUrl: string,
}
@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html'
})
export class MembershipComponent implements OnInit{
  propsMessage:InfoMessage =
    {  isButton: true,
       isText: false,
       imageUrl: "image2",}
  propsMessage2:InfoMessage =
    {  isButton: true,
       isText: true,
       imageUrl: "image3",}

  ngOnInit(): void {
  }
}

