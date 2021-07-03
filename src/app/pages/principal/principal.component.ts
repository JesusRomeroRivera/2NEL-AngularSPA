import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import FreelancerService from "../../services/freelancer-service.js";
import InvestorService from "../../services/investor-service.js";
import EntrepreneurService from "../../services/entrepreneur-service.js";

import { FreelancerModel } from "../../models/freelancer-model";
import { InvestorModel } from "../../models/investor-model";
import { EntrepreneurModel } from "../../models/entrepreneur-model";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  freelancers: Array<FreelancerModel> = [];
  entrepreneurs: Array<EntrepreneurModel> = [];
  investors: Array<InvestorModel> = [];
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

  laruta(){
    console.log(this.routes.url)
  }
  constructor(private routes: Router){
    this.getDataFreelancer();
    this.getDataInvestor();
    this.getDataEntrepreneur();
  }
  ngOnInit(): void {
  }
}