import {Component, Input, OnInit} from '@angular/core';

import FreelancerService from "../../services/freelancer-service.js";
import InvestorService from "../../services/investor-service.js";
import EntrepreneurService from "../../services/entrepreneur-service.js";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  firstName: string = "";
  lastName: string = "";
  description: string = "";
  city: string = "";
  imageUrl: string = "";
  specialty: string = "";

  update: boolean = false;
  type: string = ""
  userInformation: any ={
    userId: 0,
    imageUrl: " ",
    membershipType: "",
    firstName: "",
    lastName: "",
    description: "",
    city: "",
    specialty: ""
  };
  id: number;
  get whatSelectedFreelancer(){
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      description: this.description,
      city: this.city,
      imageUrl: this.imageUrl,
      specialty: this.specialty
    }
  }
  get whatSelected(){
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      description: this.description,
      city: this.city,
      imageUrl: this.imageUrl,
    }
  }
  initialData(userData){
    this.firstName = userData.firstName;
    this.lastName = userData.lastName;
    this.description = userData.description;
    this.city = userData.city;
    this.imageUrl = userData.imageUrl;
    this.specialty = userData.specialty;
  }
  setUser(){
    FreelancerService.get(this.id)
    .then((response) => {
      this.userInformation = response.data;
      this.type = "freelancer"
      this.initialData(this.userInformation)
      console.log(this.firstName);
    })
    .catch((e) => {
    });
    InvestorService.get(this.id)
    .then((response) => {
      this.userInformation = response.data;
      this.type = "investor"
      this.initialData(this.userInformation)
    })
    .catch((e) => {
    });
    EntrepreneurService.get(this.id)
    .then((response) => {
      this.userInformation = response.data;
      this.type = "entrepreneur"
      this.initialData(this.userInformation)
    })
    .catch((e) => {
    });
  }
  toggleUpdate(){
    this.update = !this.update
  }
  updateApi(){
    if(this.type == "freelancer") FreelancerService.update(this.id, this.whatSelectedFreelancer)
    if(this.type == "investor") InvestorService.update(this.id, this.whatSelected)
    if(this.type == "entrepreneur") EntrepreneurService.update(this.id, this.whatSelected)
    this.update = !this.update
  }
  constructor(){
      this.id = +localStorage.getItem("user");
      this.setUser()
  }
  ngOnInit(): void {
  }
}