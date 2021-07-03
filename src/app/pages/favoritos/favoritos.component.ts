import { Component, OnInit } from '@angular/core';

import FreelancerService from "../../services/freelancer-service.js";
import InvestorService from "../../services/investor-service.js";
import EntrepreneurService from "../../services/entrepreneur-service.js";

import { FreelancerModel } from "../../models/freelancer-model";
import { InvestorModel } from "../../models/investor-model";
import { EntrepreneurModel } from "../../models/entrepreneur-model";

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
    freelancers: Array<FreelancerModel> = [];
    entrepreneurs: Array<EntrepreneurModel> = [];
    investors: Array<InvestorModel> = [];

    id: number = 0;

    getDataFreelancer() {
        FreelancerService.getFavorites(this.id)
          .then((response) => {
            console.log(response)
            this.freelancers = response.data.content;
          })
          .catch((e) => {
            console.log(e);
          });
      }
      getDataInvestor() {
        InvestorService.getFavorites(this.id)
          .then((response) => {
            console.log(response)
            this.investors = response.data.content;
          })
          .catch((e) => {
            console.log(e);
          });
      }
      getDataEntrepreneur() {
        EntrepreneurService.getFavorites(this.id)
          .then((response) => {
            console.log(response)
            this.entrepreneurs = response.data.content;
          })
          .catch((e) => {
            console.log(e);
          });
      }
    constructor(){
        this.id = +localStorage.getItem("user");
        this.getDataFreelancer();
        this.getDataInvestor();
        this.getDataEntrepreneur();
    }
  ngOnInit(): void {
  }
}