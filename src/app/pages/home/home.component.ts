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
        this.freelancers = response.data;
      })
      .catch((e) => {
        console.log(e);
      });
  }
  getDataInvestor() {
    InvestorService.getAll()
      .then((response) => {
        console.log(response)
        this.investors = response.data;
      })
      .catch((e) => {
        console.log(e);
      });
  }
  getDataEnterprise() {
    EnterpriseService.getAll()
      .then((response) => {
        console.log(response)
        this.enterprises = response.data;
      })
      .catch((e) => {
        console.log(e);
      });
  }
  constructor() { 
    localStorage.setItem(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjEwMCIsIm5iZiI6MTYyNTExODIzOSwiZXhwIjoxNjI2MzI3ODM5LCJpYXQiOjE2MjUxMTgyMzl9._fzdDSFDw08opNdPQv0KEnta_GBPYYqfuRkQD9M_q-Q"
    );
    this.getDataFreelancer();
    this.getDataInvestor();
    this.getDataEnterprise();
  }
  ngOnInit(): void{};
}
