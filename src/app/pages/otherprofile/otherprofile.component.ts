import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

import FreelancerService from "../../services/freelancer-service.js";
import InvestorService from "../../services/investor-service.js";
import EntrepreneurService from "../../services/entrepreneur-service.js";
import EnterpriseService from "../../services/enterprise-service.js";

import TagService from "../../services/tag-service.js";
import TagModel from "../../services/tag-service"

import FavoriteEntrepreneurService from "../../services/favorite-entrepreneur-service.js"
import FavoriteFreelancerService from "../../services/favorite-freelancer-service.js"
import FavoriteInvestorService from "../../services/favorite-investor-service.js"

@Component({
  selector: 'app-otherprofile',
  templateUrl: './otherprofile.component.html',
  styleUrls: ['./otherprofile.component.css']
})
export class OtherProfileComponent implements OnInit {
  @Input() recepterStartup: boolean;

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

  skills: Array<TagModel> = [{
    id: 0,
    name: ""
  }];

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
    EnterpriseService.get(+this.id)
  }
  setSkills(){
    TagService.getByUserId(+this.id)
    .then((response) => { 
      this.skills = response.data.content; 
    })
    .catch((e) => {
    })
  }
  constructor(private route: ActivatedRoute){
      this.id = this.route.snapshot.paramMap.get("id");
      this.setUser()
      this.setSkills()
  }
  agregarFavoritos(){
    if(this.type == 'investor'){ 
      console.log(localStorage.getItem("user"))
      console.log(this.id)
      FavoriteInvestorService.assign(localStorage.getItem("user"), this.id) 
      .then((response) => { 
        console.log(response)
      })
      .catch((e) => {
        console.log(e)
      })
    }
    if(this.type == 'freelancer'){ 
      console.log(localStorage.getItem("user"));
      console.log(this.id);
      FavoriteFreelancerService.assign(localStorage.getItem("user"), this.id)
      .then((response) => { 
        console.log(response)
      })
      .catch((e) => {
        console.log(e)
      })
    }
    if(this.type == 'entrepreneur'){ 
      console.log(localStorage.getItem("user"));
      console.log(this.id);
      FavoriteEntrepreneurService.create(localStorage.getItem("user"), this.id)
      .then((response) => { 
        console.log(response)
      })
      .catch((e) => {
        console.log(e)
      })
    }
  }
  ngOnInit():void{
    
  }
}