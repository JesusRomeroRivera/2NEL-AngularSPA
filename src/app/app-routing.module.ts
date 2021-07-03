import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from "./pages/home/home.component";
import { MembershipComponent} from "./pages/membership/membership.component";
import { AboutComponent } from "./pages/about/about.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { LoginComponent } from "./pages/login/login.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { PrincipalComponent } from './pages/principal/principal.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { OtherProfileComponent } from './pages/otherprofile/otherprofile.component';
import { StartupsComponent } from './pages/startups/startups.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { StudentsComponent } from "./pages/students/students.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'memberships', component: MembershipComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'favoritos', component: FavoritosComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profiles/:id', component: OtherProfileComponent },
  { path: 'startups/:id', component: StartupsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
