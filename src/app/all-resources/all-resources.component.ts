import { AllResourcesService } from './../services/all-resources.service';
import { Component, OnInit } from '@angular/core';
import { Resource } from '../models/Resource';
import { Router } from '@angular/router';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';


@Component({
  selector: 'app-all-resources',
  templateUrl: './all-resources.component.html',
  styleUrls: ['./all-resources.component.css'],
  providers: [AllResourcesService]
})
export class AllResourcesComponent implements OnInit {
  listResources: Resource [];
  constructor(private Rs: AllResourcesService, private router: Router) {
      this.Rs.getALlResources().subscribe(data => {
      this.listResources = data;
      // tslint:disable-next-line:prefer-const
      for ( let r of data) {
        this.Rs.getActivity(r.id).subscribe(data2 => {
          r.activity = Number(data2.substring(0, data2.indexOf('%')));
        });
      }
    });
  }
  ngOnInit() {
    /*
      // tslint:disable-next-line:prefer-const
      let chart = am4core.create('chartdiv', am4charts.PieChart);
      chart.radius = 42;
      chart.innerRadius = 60;
      chart.data = [{
        'country': 'Lithuania',
        'litres': 501.9
      }, {
        'country': 'The Netherlands',
        'litres': 50
      }];

      // tslint:disable-next-line:prefer-const
      let pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = 'litres';
      pieSeries.dataFields.category = 'country';
      pieSeries.labels.template.disabled = true;
      pieSeries.ticks.template.disabled = true;
      pieSeries.slices.template.tooltipText = '';
      */
  }
  navigate(id: number, from: string, to: string) {
    this.router.navigateByUrl('/details/' + id + '/' + from + '/' + to);
  }

}
