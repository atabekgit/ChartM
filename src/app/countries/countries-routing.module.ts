import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries.component';
import {CounBarComponent} from "./coun-bar/coun-bar.component";
import {CounLineComponent} from "./coun-line/coun-line.component";

const routes: Routes = [
  { path: '', component: CountriesComponent,children:[
      { path: 'area', component: CounBarComponent },
      { path: 'population', component: CounLineComponent },
    ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
