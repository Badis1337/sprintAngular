import { CustomStat } from './../models/customStat';
import { AllResourcesService } from './../services/all-resources.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { checkArray } from '@amcharts/amcharts4/.internal/core/utils/Type';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-resource-details',
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.css'],
  providers: [AllResourcesService]
})
export class ResourceDetailsComponent implements OnInit {
  listr: CustomStat[];
  s: Map<Date, number> = new Map<Date, number>();
  monthlong: number[] = [0, 2, 4, 6, 7, 9, 11];
  chart: am4charts.XYChart;
  n = 0;
  g = 0;
  a = '';

  constructor(private Rs: AllResourcesService,
    private route: ActivatedRoute, private datePipe: DatePipe, private zone: NgZone) {
    this.listr = [];
  }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      // let i = 0;
      // tslint:disable-next-line:no-var-keyword
      var k = 0;
      this.route.params.subscribe(params => {
        // tslint:disable-next-line:prefer-const
        let test = new Date();
        if (new Date(params['to']) < new Date()) {
          test = new Date(params['to']);
        }
        // tslint:disable-next-line:prefer-const
        let fr = new Date(params['from']);
        for (let i = 0;
          new Date(new Date(params['from']).setMonth(new Date(params['from'])
            .getMonth() + i)) < test;
          i++) {
          // tslint:disable-next-line:prefer-const
          let f = new Date(new Date(params['from']).setMonth(new Date(params['from'])
            .getMonth() + i));
          f.setDate(1);
          // tslint:disable-next-line:prefer-const
          let t = new Date(new Date(params['from']).setMonth(new Date(params['from'])
            .getMonth() + i));
          if (this.monthlong.includes(t.getMonth())) {
            // tslint:disable-next-line:prefer-const
            k = 1;
          } else if (t.getMonth() === 1) {
            // tslint:disable-next-line:prefer-const
            k = -2;
          } else {
            k = 0;
          }
          t.setDate(30 + k);
          if (t > test) {
            t = test;
          } else {
            t = t;
          }

          // tslint:disable-next-line:prefer-const
          let customizedStat = new CustomStat();
          customizedStat.date = f;
          // tslint:disable-next-line:max-line-length
          this.Rs.getActivityBydate(params['id'], this.datePipe.transform(f, 'yyyy/MM/dd'), this.datePipe.transform(t, 'yyyy/MM/dd'))
            .subscribe(dataa => {
              customizedStat.value = Number(dataa.substring(0, dataa.indexOf('%')));
            });
          this.listr.push(customizedStat);
          this.monthlong.push(700);
        }
      });
    });
    console.log('this is g' + this.g);
  }

  fac() {
    // tslint:disable-next-line:prefer-const
    let chart = am4core.create('chartdiv', am4charts.XYChart);

    chart.paddingRight = 20;

    // tslint:disable-next-line:prefer-const
    let data = [];
    // tslint:disable-next-line:prefer-const
    for (let i = 0; i < this.listr.length; i++) {
      data.push({ date: this.listr[i].date, name: 'name' + i, value: this.listr[i].value });
    }
    console.log(this.listr);
    chart.data = data;

    // tslint:disable-next-line:prefer-const
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    // tslint:disable-next-line:prefer-const
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;

    // tslint:disable-next-line:prefer-const
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = 'date';
    series.dataFields.valueY = 'value';

    series.tooltipText = '{valueY.value}';
    chart.cursor = new am4charts.XYCursor();
    // tslint:disable-next-line:prefer-const
    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;
    this.chart = chart;
    console.log(this.listr[2].value);
  }

}
