import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from "./pages/home/home.component";
import { StudentsComponent } from "./pages/students/students.component";
import { StudentComponent } from "./pages/student/student.component";
import { AboutComponent } from "./pages/about/about.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'students', component: StudentsComponent },
  { path: 'students/new', component: StudentComponent },
  { path: 'students/:id', component: StudentComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
