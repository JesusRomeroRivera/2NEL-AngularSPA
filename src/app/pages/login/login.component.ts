import {Component, Input, OnInit} from '@angular/core';

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
  email: " ";
  password: " ";
  get whatSelected() {
    return {
      email: this.email,
      password: this.password,
    }
  }
  toggleModal() {
    this.modalView = !this.modalView;
  }
  sumbitEmail() {
    if (document.getElementById("emailRecoveringPassword").nodeValue == "") {
      this.noEmail = true;
    } else {
      this.modalView = !this.modalView;
      this.noEmail = false;
    }
  }
  sumbitLogin() {
    console.log("hola");
    /*UserService.login(this.whatSelected).then((response) => {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", response.data);
      this.$router.push({
        path: "/principal",
        params: {user: response.data.id},
      });
    });*/
  }
  ngOnInit(): void {
  }

}
