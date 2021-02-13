import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from "@angular/forms";
import { ProfilepageComponent } from './profilepage/profilepage.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ApiService } from './api.service';
const routes: Routes = [
  {path:'home',component: HomepageComponent},
  {path:'profile',component:ProfilepageComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProfilepageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule   
  ],
  exports: [RouterModule],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
