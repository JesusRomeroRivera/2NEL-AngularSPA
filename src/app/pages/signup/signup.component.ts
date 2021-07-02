import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
interface formData {email:string, password:string}
@Component({
  selector: 'px-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  buttonColor: string = "black"
  noData: boolean = false
  email: string = ""
  password: string = ""
  modalView: boolean = false
  userData: formData = {
    email: "",
    password: ""
  }
  check: boolean = false
  user: {}
  registerUser(userVariable) {
    console.log("Estoy registrando un usuario");
    /*UserService.create(userVariable)
      .then((response) => {
        console.log(response);
        this.$route.params.user = response.data.id;
      })
      .catch((e) => {
        console.log(e);
      });*/
  }
  toggleModal() {
    this.modalView = !this.modalView;
  }
  insertData() {
    if (this.check) {
      this.userData.email = this.email;
      this.userData.password = this.password;
      this.registerUser(this.userData);
      /*this.$router.push({
        path: "/registerDetails",
      });*/
    } else {
      alert("Acepte los términos y condiciones");
    }
  }

  ngOnInit(): void {

  }

}

