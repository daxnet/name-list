import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  names: string[];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getNames();
  }

  getNames(): void {
    this.appService.getNames()
      .subscribe(names => this.names = names);
  }
}
