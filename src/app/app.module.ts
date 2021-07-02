import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentsComponent } from './pages/students/students.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { MembershipComponent } from './pages/membership/membership.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { HttpClientModule } from "@angular/common/http";
import { MatTooltipModule } from "@angular/material/tooltip";


import { PxButtonComponent } from "./components/PxButton/PxButton.component";
import { PxMessageComponent } from "./components/PxMessage/PxMessage.component";
<<<<<<< HEAD
import { PxPrincipalComponent } from "./components/PxPrincipal/PxPrincipal.component";
import { PxListComponent } from "./components/PxList/PxList.component";
import { PxFooterComponent} from "./components/PxFooter/PxFooter.component";
import { PxIconComponent} from "./components/PxIcon/PxIcon.component";
import { PxMembershipComponent} from "./components/PxMembership/PxMembership.component";
import { PxCardMembershipComponent} from "./components/PxCardMembership/PxCardMembership.component";
=======
import {PxPrincipalComponent} from "./components/PxPrincipal/PxPrincipal.component";
import {PxFooterComponent} from "./components/PxFooter/PxFooter.component";
import {PxIconComponent} from "./components/PxIcon/PxIcon.component";
import {PxMembershipComponent} from "./components/PxMembership/PxMembership.component";
import {PxCardMembershipComponent} from "./components/PxCardMembership/PxCardMembership.component";
>>>>>>> 3c46785c86314dcdf5c5f3c1578f5ceef5642267

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    HomeComponent,
    AboutComponent,
    MembershipComponent,
    LoginComponent,
    PageNotFoundComponent,
    PxButtonComponent,
    PxMessageComponent,
<<<<<<< HEAD
    PxPrincipalComponent,
    PxListComponent,
=======
>>>>>>> 3c46785c86314dcdf5c5f3c1578f5ceef5642267
    PxMembershipComponent,
    PxCardMembershipComponent,
    PxPrincipalComponent,
    PxFooterComponent,
    PxIconComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatGridListModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatTableModule,
        MatPaginatorModule,
        HttpClientModule,
        MatTooltipModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
