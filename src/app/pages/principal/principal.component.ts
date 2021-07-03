import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import FreelancerService from "../../services/freelancer-service.js";
import InvestorService from "../../services/investor-service.js";
import EntrepreneurService from "../../services/entrepreneur-service.js";
import EnterpriseService from "../../services/enterprise-service.js";

import { FreelancerModel } from "../../models/freelancer-model";
import { InvestorModel } from "../../models/investor-model";
import { EntrepreneurModel } from "../../models/entrepreneur-model";
import { EnterpriseModel } from "../../models/enterprise-model";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  freelancers: Array<FreelancerModel> = [];
  entrepreneurs: Array<EntrepreneurModel> = [];
  investors: Array<InvestorModel> = [];
  enterprises: Array<EnterpriseModel> = [];
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
  getDataEntrepreneur() {
    EntrepreneurService.getAll()
      .then((response) => {
        console.log(response)
        this.entrepreneurs = response.data.content;
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

  laruta(){
    console.log(this.routes.url)
  }
  constructor(private routes: Router){
    this.getDataFreelancer();
    this.getDataInvestor();
    this.getDataEntrepreneur();
    this.getDataEnterprise();
  }
  ngOnInit(): void {
  }
}