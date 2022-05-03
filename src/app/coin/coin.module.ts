import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoinRoutingModule } from './coin-routing.module';
import { CoinComponent } from './coin.component';
import {ngxLoadingAnimationTypes, NgxLoadingModule} from "ngx-loading";


@NgModule({
  declarations: [
    CoinComponent
  ],
    imports: [
        CommonModule,
        CoinRoutingModule,
        NgxLoadingModule.forRoot({
          animationType: ngxLoadingAnimationTypes.wanderingCubes,
        })
    ]
})
export class CoinModule { }
