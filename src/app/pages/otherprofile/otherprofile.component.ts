import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

import FreelancerService from "../../services/freelancer-service.js";
import InvestorService from "../../services/investor-service.js";
import EntrepreneurService from "../../services/entrepreneur-service.js";

@Component({
  selector: 'app-otherprofile',
  templateUrl: './otherprofile.component.html',
  styleUrls: ['./otherprofile.component.css']
})
export class OtherProfileComponent implements OnInit {
  @Input() recepterId: number;

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
  id: string;
  setUser(){
    FreelancerService.get(+this.id)
    .then((response) => {
      this.userInformation = response.data;
      this.type = "freelancer"
    })
    .catch((e) => {
    });
    InvestorService.get(+this.id)
    .then((response) => {
      this.userInformation = response.data;
      this.type = "investor"
    })
    .catch((e) => {
    });
    EntrepreneurService.get(+this.id)
    .then((response) => {
      this.userInformation = response.data;
      this.type = "entrepreneur"
    })
    .catch((e) => {
    });
  }
  constructor(private route: ActivatedRoute){
      this.id = this.route.snapshot.paramMap.get("id");
      this.setUser()
  }
  ngOnInit():void{
    
  }
}