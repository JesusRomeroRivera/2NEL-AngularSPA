import {Component, EventEmitter, Input, Output} from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'px-header',
  templateUrl: './PxHeader.component.html',
  styleUrls: ['./PxHeader.component.css']
})
export class PxHeaderComponent{
  buttonColor: string ="black"
  navAppears: boolean = false
  menuOpen: boolean = false
  appearLabelBool: boolean = false

  constructor(private router: Router ) { }
  
  get getRoute(){
    if(this.router.url.substring(0, 9) == '/profiles') return '/profiles'
    return this.router.url;
  }

  appearLabel() {
    this.appearLabelBool = !this.appearLabelBool;
  }
  closeSesion() {
    this.router.navigate(["/"]);
  }
  navToggle() {
    const menuBtn = document.querySelector(".menu-btn");
    this.navAppears = !this.navAppears;
    if (!this.menuOpen) {
      menuBtn.classList.add("open");
      this.menuOpen = true;
    } else {
      menuBtn.classList.remove("open");
      this.menuOpen = false;
    }
  }
}
