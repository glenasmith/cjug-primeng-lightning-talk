import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Talk } from './talk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  talks : Array<Talk>;

  constructor(private http: Http) {

  }


  ngOnInit() {

    this.http.get('./assets/talks.json').subscribe(r => {
      console.log(r);
      this.talks = r.json().sessions;
    });

  }


}
