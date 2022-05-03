import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesComponent } from './countries.component';
import { CounBarComponent } from './coun-bar/coun-bar.component';
import { CounLineComponent } from './coun-line/coun-line.component';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {ButtonsModule, MDBBootstrapModule} from "angular-bootstrap-md";
import {NgxLoadingModule} from "ngx-loading";


@NgModule({
  declarations: [
    CountriesComponent,
    CounBarComponent,
    CounLineComponent
  ],
    imports: [
        CommonModule,
        CountriesRoutingModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        ButtonsModule,
        MDBBootstrapModule,
        NgxLoadingModule
    ]
})
export class CountriesModule { }
