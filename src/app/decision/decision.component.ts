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
  constructor(private scs: SkillCountryService) {
    this.scs.getCountry().subscribe(data => this.lsCountry = data);
    this.scs.getSkills().subscribe(data => this.lsSkills = data);
  }

  ngOnInit() {
  }
  activityPerCountry() {
    this.changeApc = !this.changeApc;
    // tslint:disable-next-line:prefer-const
    let chart1 = am4core.create('chart1div', am4charts.XYChart);

    // Add data
    // tslint:disable-next-line:prefer-const
    let data = [];
    for (let i = 0; i < this.lsCountry.length; i++) {
      data.push({ country: this.lsCountry[i].pays, activity: this.lsCountry[i].activity, color: chart1.colors.next() });
    }
    chart1.data = data;
    // Create axes
    // tslint:disable-next-line:prefer-const
    let categoryAxis = chart1.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'country';
    categoryAxis.renderer.labels.template.rotation = 270;
    categoryAxis.renderer.labels.template.hideOversized = false;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.labels.template.horizontalCenter = 'right';
    categoryAxis.renderer.labels.template.verticalCenter = 'middle';
    categoryAxis.tooltip.label.rotation = 270;
    categoryAxis.tooltip.label.horizontalCenter = 'right';
    categoryAxis.tooltip.label.verticalCenter = 'middle';
    // tslint:disable-next-line:prefer-const
    let valueAxis = chart1.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = 'Countries';
    valueAxis.title.fontWeight = 'bold';
    // Create series
    // tslint:disable-next-line:prefer-const
    let series = chart1.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueY = 'activity';
    series.dataFields.categoryX = 'country';
    series.name = 'activity';
    series.tooltipText = '{categoryX}: [bold]{valueY}[/]';
    series.columns.template.fillOpacity = .8;
    series.columns.template.propertyFields.fill = 'color';
    // tslint:disable-next-line:prefer-const
    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;
    columnTemplate.stroke = am4core.color('#FFFFFF');
    chart1.cursor = new am4charts.XYCursor();
    chart1.cursor.lineX.strokeOpacity = 0;
    chart1.cursor.lineY.strokeOpacity = 0;
    // Enable export
    chart1.exporting.menu = new am4core.ExportMenu();
  }
  resourcesPerCountry() {
    this.changeRpc = !this.changeRpc;
    console.log(this.lsSkills);
    // tslint:disable-next-line:prefer-const
    let chart = am4core.create('chart2div', am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.legend = new am4charts.Legend();
    // tslint:disable-next-line:prefer-const
    let data = [];
    for (let i = 0; i < this.lsCountry.length; i++) {
      data.push({ country: this.lsCountry[i].pays, numberOfResources: this.lsCountry[i].nbRessource });
    }
    chart.data = data;

    // tslint:disable-next-line:prefer-const
    let series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = 'numberOfResources';
    series.dataFields.category = 'country';
    chart.exporting.menu = new am4core.ExportMenu();
  }


  resourcesPerSkill() {
    this.changeRps = !this.changeRps;
    // tslint:disable-next-line:prefer-const
    let chart = am4core.create('chart3div', am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.legend = new am4charts.Legend();
    // tslint:disable-next-line:prefer-const
    let data = [];
    for (let i = 0; i < this.lsSkills.length; i++) {
      data.push({ skill: this.lsSkills[i].nomSkill, numberOfResources: this.lsSkills[i].nbRessource });
    }
    chart.data = data;

    // tslint:disable-next-line:prefer-const
    let series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = 'numberOfResources';
    series.dataFields.category = 'skill';
    chart.exporting.menu = new am4core.ExportMenu();
  }

  activityPerSkill() {
    this.changeAps = !this.changeAps;
    // tslint:disable-next-line:prefer-const
    let chart1 = am4core.create('chart4div', am4charts.XYChart);

    // Add data
    // tslint:disable-next-line:prefer-const
    let data = [];
    for (let i = 0; i < this.lsSkills.length; i++) {
      data.push({ skill: this.lsSkills[i].nomSkill, activity: this.lsSkills[i].activity, color: chart1.colors.next() });
    }
    chart1.data = data;
    // Create axes
    // tslint:disable-next-line:prefer-const
    let categoryAxis = chart1.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'skill';
    categoryAxis.renderer.labels.template.rotation = 270;
    categoryAxis.renderer.labels.template.hideOversized = false;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.labels.template.horizontalCenter = 'right';
    categoryAxis.renderer.labels.template.verticalCenter = 'middle';
    categoryAxis.tooltip.label.rotation = 270;
    categoryAxis.tooltip.label.horizontalCenter = 'right';
    categoryAxis.tooltip.label.verticalCenter = 'middle';
    // tslint:disable-next-line:prefer-const
    let valueAxis = chart1.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = 'skills';
    valueAxis.title.fontWeight = 'bold';
    // Create series
    // tslint:disable-next-line:prefer-const
    let series = chart1.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueY = 'activity';
    series.dataFields.categoryX = 'skill';
    series.name = 'activity';
    series.tooltipText = '{categoryX}: [bold]{valueY}[/]';
    series.columns.template.fillOpacity = .8;
    series.columns.template.propertyFields.fill = 'color';
    // tslint:disable-next-line:prefer-const
    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;
    columnTemplate.stroke = am4core.color('#FFFFFF');
    chart1.cursor = new am4charts.XYCursor();
    chart1.cursor.lineX.strokeOpacity = 0;
    chart1.cursor.lineY.strokeOpacity = 0;
    // Enable export
    chart1.exporting.menu = new am4core.ExportMenu();
  }
}
