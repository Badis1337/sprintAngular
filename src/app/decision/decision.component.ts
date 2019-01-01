import { SkillModel } from './../models/SkillModel';
import { SkillCountryService } from './../services/skill-country.service';
import { Component, OnInit } from '@angular/core';
import { CountryModel } from '../models/CountryModel';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

@Component({
  selector: 'app-decision',
  templateUrl: './decision.component.html',
  styleUrls: ['./decision.component.css'],
  providers: [SkillCountryService]
})
export class DecisionComponent implements OnInit {
  lsCountry: CountryModel[];
  lsSkills: SkillModel[];
  changeApc = true;
  changeRpc = true;
  changeAps = true;
  changeRps = true;
  etatApc = false;
  etatRpc = false;
  etatAps = false;
  etatRps = false;
  constructor(private scs: SkillCountryService) {
    this.scs.getCountry().subscribe(data => this.lsCountry = data);
    this.scs.getSkills().subscribe(data => this.lsSkills = data);
  }

  ngOnInit() {
  }
  showStat() {
    // tslint:disable-next-line:prefer-const
    let chart1 = am4core.create('chart1div', am4charts.XYChart);

    // Add data
    // tslint:disable-next-line:prefer-const
    let data1 = [];
    for (let i = 0; i < this.lsCountry.length; i++) {
      data1.push({ country: this.lsCountry[i].pays, activity: this.lsCountry[i].activity, color: chart1.colors.next() });
    }
    chart1.data = data1;
    // Create axes
    // tslint:disable-next-line:prefer-const
    let categoryAxis1 = chart1.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis1.dataFields.category = 'country';
    categoryAxis1.renderer.labels.template.rotation = 270;
    categoryAxis1.renderer.labels.template.hideOversized = false;
    categoryAxis1.renderer.minGridDistance = 20;
    categoryAxis1.renderer.labels.template.horizontalCenter = 'right';
    categoryAxis1.renderer.labels.template.verticalCenter = 'middle';
    categoryAxis1.tooltip.label.rotation = 270;
    categoryAxis1.tooltip.label.horizontalCenter = 'right';
    categoryAxis1.tooltip.label.verticalCenter = 'middle';
    // tslint:disable-next-line:prefer-const
    let valueAxis1 = chart1.yAxes.push(new am4charts.ValueAxis());
    valueAxis1.title.text = 'Countries';
    valueAxis1.title.fontWeight = 'bold';
    // Create series
    // tslint:disable-next-line:prefer-const
    let series1 = chart1.series.push(new am4charts.ColumnSeries3D());
    series1.dataFields.valueY = 'activity';
    series1.dataFields.categoryX = 'country';
    series1.name = 'activity';
    series1.tooltipText = '{categoryX}: [bold]{valueY}[/]';
    series1.columns.template.fillOpacity = .8;
    series1.columns.template.propertyFields.fill = 'color';
    // tslint:disable-next-line:prefer-const
    let columnTemplate1 = series1.columns.template;
    columnTemplate1.strokeWidth = 2;
    columnTemplate1.strokeOpacity = 1;
    columnTemplate1.stroke = am4core.color('#FFFFFF');
    chart1.cursor = new am4charts.XYCursor();
    chart1.cursor.lineX.strokeOpacity = 0;
    chart1.cursor.lineY.strokeOpacity = 0;
    // Enable export
    chart1.exporting.menu = new am4core.ExportMenu();


    // tslint:disable-next-line:prefer-const
    let chart2 = am4core.create('chart2div', am4charts.PieChart3D);
    chart2.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart2.legend = new am4charts.Legend();
    // tslint:disable-next-line:prefer-const
    let data2 = [];
    for (let i = 0; i < this.lsCountry.length; i++) {
      data2.push({ country: this.lsCountry[i].pays, numberOfResources: this.lsCountry[i].nbRessource });
    }
    chart2.data = data2;

    // tslint:disable-next-line:prefer-const
    let series2 = chart2.series.push(new am4charts.PieSeries3D());
    series2.dataFields.value = 'numberOfResources';
    series2.dataFields.category = 'country';
    chart2.exporting.menu = new am4core.ExportMenu();


     // tslint:disable-next-line:prefer-const
    let chart3 = am4core.create('chart3div', am4charts.PieChart3D);
    chart3.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart3.legend = new am4charts.Legend();
    // tslint:disable-next-line:prefer-const
    let data3 = [];
    for (let i = 0; i < this.lsSkills.length; i++) {
      data3.push({ skill: this.lsSkills[i].nomSkill, numberOfResources: this.lsSkills[i].nbRessource });
    }
    chart3.data = data3;

    // tslint:disable-next-line:prefer-const
    let series3 = chart3.series.push(new am4charts.PieSeries3D());
    series3.dataFields.value = 'numberOfResources';
    series3.dataFields.category = 'skill';
    chart3.exporting.menu = new am4core.ExportMenu();


     // tslint:disable-next-line:prefer-const
     let chart4 = am4core.create('chart4div', am4charts.XYChart);

     // Add data
     // tslint:disable-next-line:prefer-const
     let data4 = [];
     for (let i = 0; i < this.lsSkills.length; i++) {
       data4.push({ skill: this.lsSkills[i].nomSkill, activity: this.lsSkills[i].activity, color: chart4.colors.next() });
     }
     chart4.data = data4;
     // Create axes
     // tslint:disable-next-line:prefer-const
     let categoryAxis4 = chart4.xAxes.push(new am4charts.CategoryAxis());
     categoryAxis4.dataFields.category = 'skill';
     categoryAxis4.renderer.labels.template.rotation = 270;
     categoryAxis4.renderer.labels.template.hideOversized = false;
     categoryAxis4.renderer.minGridDistance = 20;
     categoryAxis4.renderer.labels.template.horizontalCenter = 'right';
     categoryAxis4.renderer.labels.template.verticalCenter = 'middle';
     categoryAxis4.tooltip.label.rotation = 270;
     categoryAxis4.tooltip.label.horizontalCenter = 'right';
     categoryAxis4.tooltip.label.verticalCenter = 'middle';
     // tslint:disable-next-line:prefer-const
     let valueAxis4 = chart4.yAxes.push(new am4charts.ValueAxis());
     valueAxis4.title.text = 'skills';
     valueAxis4.title.fontWeight = 'bold';
     // Create series
     // tslint:disable-next-line:prefer-const
     let series4 = chart4.series.push(new am4charts.ColumnSeries3D());
     series4.dataFields.valueY = 'activity';
     series4.dataFields.categoryX = 'skill';
     series4.name = 'activity';
     series4.tooltipText = '{categoryX}: [bold]{valueY}[/]';
     series4.columns.template.fillOpacity = .8;
     series4.columns.template.propertyFields.fill = 'color';
     // tslint:disable-next-line:prefer-const
     let columnTemplate4 = series4.columns.template;
     columnTemplate4.strokeWidth = 2;
     columnTemplate4.strokeOpacity = 1;
     columnTemplate4.stroke = am4core.color('#FFFFFF');
     chart4.cursor = new am4charts.XYCursor();
     chart4.cursor.lineX.strokeOpacity = 0;
     chart4.cursor.lineY.strokeOpacity = 0;
     // Enable export
     chart4.exporting.menu = new am4core.ExportMenu();
  }
  resourcesPerCountry() {
  }


  resourcesPerSkill() {
  }

  activityPerSkill() {
  }
}
