import { Component, OnInit } from '@angular/core';

interface InfoMessage {
  isButton: boolean,
  isText: boolean,
  imageUrl: string,
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  noButton: InfoMessage ={
    isButton: false,
    isText: false,
    imageUrl: "image5",
  }

  withButton: InfoMessage = {
    isButton: true,
    isText: false,
    imageUrl: "image4",
  }
  
  noButtonOtherImage: InfoMessage = {
    isButton: false,
    isText: false,
    imageUrl: "image6",
  }
  ngOnInit(): void {
  }

}
