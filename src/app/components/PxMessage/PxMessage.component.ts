import {Component, EventEmitter, Input, Output} from "@angular/core";

interface InfoMessage {
  isButton: boolean,
  isText: boolean,
  imageUrl: string,
}

@Component({
  selector: 'px-message',
  templateUrl: './PxMessage.component.html',
  styleUrls: ['./PxMessage.component.css']
})
export class PxMessageComponent{
  @Input() isAny : InfoMessage;

  buttonColor: "black"
}
