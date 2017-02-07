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

  talks : Array<Talk>;
  selectedTalk : any;
  messages: Message[] = [];


  constructor(private http: Http) {

  }


  ngOnInit() {

    this.http.get('./assets/talks.json').subscribe(r => {
      this.talks = r.json().sessions;
    });
  }


  public onSessionSelection(evt :any) {

    this.messages.push({severity:'info', summary:'Want to Voluteer?', detail:'Do It Today!'});

  }

}
