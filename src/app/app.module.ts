import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import {HomeComponent} from './home/home.component';
import {FormsModule} from "@angular/forms";
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {ngxLoadingAnimationTypes, NgxLoadingModule} from "ngx-loading";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
    MDBBootstrapModule,

    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.wanderingCubes,
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
