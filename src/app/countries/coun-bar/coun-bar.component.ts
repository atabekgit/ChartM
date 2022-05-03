import { Component, OnInit } from '@angular/core';
import {Chart, registerables} from "chart.js";
import {ServicesService} from "../../services.service";

@Component({
  selector: 'app-coun-bar',
  templateUrl: './coun-bar.component.html',
  styleUrls: ['./coun-bar.component.scss']
})
export class CounBarComponent implements OnInit {
  public loading = false;
  bar_chart: any=[];
  output: any
  area: any
  country: any
  name: any

  constructor(private server:ServicesService) {Chart.register(...registerables)}

  ngOnInit(): void {
    this.loading = true
    this.server.getCountriesAll().then((result)=>{
      this.output = result
      this.loading = false
      this.area = this.output?.slice(33,49).map((area: any) => area.area)
      console.log(this.area)
      this.country = this.output?.map((country: any) => country.name)
      this.name = this.country.slice(33,49).map((name: any) => name.common)
      this.bar_chart = new Chart('bar',{
        type:'bar',
        data:{
          labels:this.name,
          datasets:[{
            label:"Area country",
            backgroundColor: 'rgb(249, 49, 84)',
            data:this.area
          }]
        }
      })


    })

  }

}
