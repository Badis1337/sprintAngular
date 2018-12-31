import { CustomStat } from './../models/customStat';
import { AllResourcesService } from './../services/all-resources.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-resource-details',
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.css'],
  providers: [AllResourcesService]
})
export class ResourceDetailsComponent implements OnInit {
  listr: CustomStat[] = [];
  monthlong: number[] = [0, 2, 4, 6, 7, 9, 11];

  constructor(private Rs: AllResourcesService,
     private route: ActivatedRoute, private datePipe: DatePipe) {
  // tslint:disable-next-line:no-var-keyword
  var k = 0;
  this.route.params.subscribe(params => {
  // tslint:disable-next-line:prefer-const
  let test = new Date();
  if (new Date(params['to']) < new Date()) {
 test = new Date(params['to']);
  }
   // tslint:disable-next-line:prefer-const
   let fr =  new Date(params['from']);
  for (let i = 0 ;
    new Date(new Date(params['from']).setMonth(new Date(params['from'])
      .getMonth() + i)) < test ;
     i++) {
      // tslint:disable-next-line:prefer-const
      let f =  new Date(new Date(params['from']).setMonth(new Date(params['from'])
      .getMonth() + i));
      f.setDate(1);
      // tslint:disable-next-line:prefer-const
        let t =   new Date(new Date(params['from']).setMonth(new Date(params['from'])
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
      }
      // tslint:disable-next-line:prefer-const
      this.Rs
      .getActivityBydate(params['id'], this.datePipe.transform(f, 'yyyy/MM/dd'), this.datePipe.transform(t, 'yyyy/MM/dd'))
      .subscribe(data2 => {
        // tslint:disable-next-line:prefer-const
        let customizedStat = new CustomStat();
        customizedStat.date = f;
        customizedStat.dates = t ;
        customizedStat.activity = Number(data2.substring(0, data2.indexOf('%')));
        this.listr.push(customizedStat);
      });
     }
});
  }

  ngOnInit() {
    console.log(this.listr);
   }

}
