import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import AuthService from "../../services/auth-service.js";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  buttonColor: "black";
  modalView: boolean = false;
  noEmail: boolean = false;
  noData: boolean = false;
  username: string = "";
  password: string = "";
  get whatSelected() {
    return {
      username: this.username,
      password: this.password,
    }
  }
  toggleModal() {
    this.modalView = !this.modalView;
  }
  sumbitEmail() {
    console.log("XD");
    if (document.getElementById("emailRecoveringPassword").nodeValue == "") {
      this.noEmail = true;
    } else {
      this.modalView = !this.modalView;
      this.noEmail = false;
    }
  }
  sumbitLogin() {
    console.log(this.whatSelected);
    AuthService.auth(this.whatSelected).then((response) => {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", response.data.id);
      console.log(localStorage.getItem("token"))
      this.routes.navigate(["/principal"]);/*
      this.$router.push({
        path: "/principal",
        params: {user: response.data.id},
      });*/
    });
  }
  constructor(private routes: Router){}
  ngOnInit(): void {
  }

}
