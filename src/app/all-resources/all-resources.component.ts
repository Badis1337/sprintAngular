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
  }
  navigate(id: number, from: string, to: string, n: string, l: string) {
    this.router.navigateByUrl('/details/' + id + '/' + from + '/' + to + '/' + n + '/' + l);
  }

}
