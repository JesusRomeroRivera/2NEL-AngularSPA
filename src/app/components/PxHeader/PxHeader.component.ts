import {Component, EventEmitter, Input, Output} from "@angular/core";

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

  appearLabel() {
    this.appearLabelBool = !this.appearLabelBool;
  }
  /*closeSesion() {
    this.$router.push({
      name: "home",
    });
  },*/
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
