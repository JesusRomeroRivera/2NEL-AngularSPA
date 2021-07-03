import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

import FreelancerService from "../../services/freelancer-service.js";
import InvestorService from "../../services/investor-service.js";
import EntrepreneurService from "../../services/entrepreneur-service.js";
import EnterpriseService from "../../services/enterprise-service.js";

import TagService from "../../services/tag-service.js";
import TagModel from "../../services/tag-service"

@Component({
  selector: 'app-startups',
  templateUrl: './startups.component.html',
  styleUrls: ['./startups.component.css']
})
export class StartupsComponent implements OnInit {
  @Input() recepterStartup: boolean;

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
    EnterpriseService.get(+this.id)
    .then((response) => {
      this.userInformation = response.data;
    })
    .catch((e) => {
    });
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
  ngOnInit():void{
    
  }
}