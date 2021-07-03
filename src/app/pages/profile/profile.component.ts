import {Component, Input, OnInit} from '@angular/core';

import FreelancerService from "../../services/freelancer-service.js";
import InvestorService from "../../services/investor-service.js";
import EntrepreneurService from "../../services/entrepreneur-service.js";
import TagService from "../../services/tag-service.js";
import ProfileTagService from "../../services/profile-tag-service.js";

import TagModel from "../../services/tag-service"

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

  skills: Array<TagModel> = [{
    id: 0,
    name: ""
  }];
  allSkills: Array<TagModel> = [{
    id: 0,
    name: ""
  }];

  skillText: string = "";
  
  deleteSkill(index, id) {
    this.skills.splice(index, 1);
    this.skillIds.splice(id, 1);
    ProfileTagService.delete(this.id, id)
      .then((response) => { 
        console.log("Se ha borrado") 
        console.log(response) 
      })
      .catch((e) => {
      })
  }
  skillIds: number[] = []
  get existSkill(){
    let exist: boolean = false
    for(let skill of this.allSkills){
      if(skill.name == this.skillText) {
        exist = true
        this.skills.push({
          id: skill.id,
          name: skill.name
        });
        this.skillIds.push(skill.id)
      }
    }
    return exist;
  }
  agregarSkill () {
    let skillView: TagModel = {
      id: this.id,
      name: this.skillText
    }
    if(!this.existSkill){
      TagService.create({ name: this.skillText })
        .then((response) => {
          let skillCreate: TagModel = {
            id: response.data.id,
            name: response.data.name
        }
        this.skills.push(skillCreate);
        this.skillIds.push(+skillCreate.id)
        console.log(skillCreate)
        console.log(skillCreate.id)
      })
      .catch((e) => {
        console.log(e)
      });
    }
    this.skillText = "";
  }

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
  setSkills(){
    TagService.getByUserId(this.id)
    .then((response) => { 
      this.skills = response.data.content; 
    })
    .catch((e) => {
    })
    TagService.getAll()
    .then((response) => { 
      this.allSkills = response.data.content; 
    })
    .catch((e) => {
    })
  }
  updateApi(){
    if(this.type == "freelancer") FreelancerService.update(this.id, this.whatSelectedFreelancer)
    if(this.type == "investor") InvestorService.update(this.id, this.whatSelected)
    if(this.type == "entrepreneur") EntrepreneurService.update(this.id, this.whatSelected)
    for(let i of this.skillIds){
      console.log(i)
      console.log(this.skillIds)
      ProfileTagService.add(this.id, i)
        .then((response) => { 
          console.log("Se ha agregado") 
          console.log(response)  
        })
        .catch((e) => {
          console.log(e)
        })
    }
    this.update = !this.update
  }
  constructor(){
      this.id = +localStorage.getItem("user");
      this.setUser()
      this.setSkills()
  }
  toggleUpdate(){
    this.update = !this.update
  }
  ngOnInit(): void {
  }
}