import { Component, OnInit } from '@angular/core';

interface InfoMessage {
  isButton: boolean,
  isText: boolean,
  imageUrl: string,
}

import FreelancerService from "../../services/freelancer-service.js";
import InvestorService from "../../services/investor-service.js";
import EnterpriseService from "../../services/enterprise-service.js";

import { FreelancerModel } from "../../models/freelancer-model";
import { InvestorModel } from "../../models/investor-model";
import { EnterpriseModel } from "../../models/enterprise-model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  freelancers: Array<FreelancerModel> = [];
  enterprises: Array<EnterpriseModel> = [];
  investors: Array<InvestorModel> = [];
  propsMessage: InfoMessage ={
    isButton: true,
    isText: false,
    imageUrl: "image1",
  }
  getDataFreelancer() {
    FreelancerService.getAll()
      .then((response) => {
        console.log(response)
        this.freelancers = response.data.content;
      })
      .catch((e) => {
        console.log(e);
      });
  }
  getDataInvestor() {
    InvestorService.getAll()
      .then((response) => {
        console.log(response)
        this.investors = response.data.content;
      })
      .catch((e) => {
        console.log(e);
      });
  }
  getDataEnterprise() {
    EnterpriseService.getAll()
      .then((response) => {
        console.log(response)
        this.enterprises = response.data.content;
      })
      .catch((e) => {
        console.log(e);
      });
  }
  constructor() { 
    localStorage.setItem(
      "token",
      "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqZXN1c0BnbWFpbC5jb20iLCJleHAiOjE2MjUyNzM4ODMsImlhdCI6MTYyNTI1NTg4M30.2Z9kfa-Z9fBkwAu8fiJTjODupxJoB1kWnGJ_efxXrOgvJLtEv_EEAuPnIpHaf1TnIDIij_WJGEr9HFmLW2_w4w"
    );
    this.getDataFreelancer();
    this.getDataInvestor();
    this.getDataEnterprise();
  }
  ngOnInit(): void{};
}
