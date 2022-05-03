import {Component, OnInit} from '@angular/core';
import {ServicesService} from "./services.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

constructor(private services:ServicesService) {
}

  ngOnInit(): void {
  this.services.covidData().then((result)=>{
    console.log(result)
  })
  }
}
