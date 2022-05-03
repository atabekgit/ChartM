import {Component, OnInit} from '@angular/core';
import {ServicesService} from "../../services.service";
import {Chart, registerables} from "chart.js";

@Component({
  selector: 'app-coun-line',
  templateUrl: './coun-line.component.html',
  styleUrls: ['./coun-line.component.scss']
})
export class CounLineComponent implements OnInit {
  public loading = false;
  line_chart: any = [];
  output: any
  population: any
  country: any
  name: any
  constructor(private server: ServicesService) {
    Chart.register(...registerables)
  }
  ngOnInit() {
    this.loading = true
    this.server.getCountriesAll().then((result) => {
      this.output = result
      this.loading = false
      this.population = this.output?.slice(33,49).map((population: any) => population.population)
      this.country = this.output?.map((country: any) => country.name)
      this.name = this.country.slice(33,49).map((name: any) => name.common)
      console.log(this.name)
      this.line_chart = new Chart('line', {
        type: 'line',
        data: {
          labels: this.name, datasets: [{
            fill: false,
            tension: 0.1,
            label:'Population country',
            backgroundColor: 'rgb(57,192,237)',
            data: this.population
          }]
        }
      })
    })
  }
}
