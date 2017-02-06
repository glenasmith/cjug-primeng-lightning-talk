import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Talk } from './talk';

import {Message} from 'primeng/primeng';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  talks : Array<Talk>;
  selectedTalk : any;
  messages: Message[] = [];

  mapOptions: any;

  mapOverlays: any[];

  chartData = {
    labels: ['A', 'B', 'C'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ]
      }]
  };


  constructor(private http: Http) {

  }


  ngOnInit() {

    this.http.get('./assets/talks.json').subscribe(r => {
      console.log(r);
      this.talks = r.json().sessions;
    });
  }


  public onSessionSelection(evt :any) {

    console.log(evt);
    console.log(this.selectedTalk);
    this.messages.push({severity:'info', summary:'Info Message', detail:'PrimeNG rocks'});

  }

}
