import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginBarComponent } from './login/login-bar.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageContentComponent } from './right-page-content/page-content.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CardComponent } from './card/card.component';
import {BloggingService} from "./blogging-service/blogging.service";



const approutes = [
  {path:'', component:LoginPageComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'**',redirectTo:'', component:LoginPageComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    LoginBarComponent,
    DashboardComponent,
    LoginPageComponent,
    PageContentComponent,
    SideBarComponent,
    LoginPageComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [
    BloggingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
