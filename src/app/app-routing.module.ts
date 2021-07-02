import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from "./pages/home/home.component";
import { MembershipComponent} from "./pages/membership/membership.component";
import { AboutComponent } from "./pages/about/about.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import {LoginComponent} from "./pages/login/login.component";
import {SignupComponent} from "./pages/signup/signup.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'memberships', component: MembershipComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
