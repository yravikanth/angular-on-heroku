import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from './rest.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SampleApp1';
  names: any;
  constructor(private restService: RestService) { }
  
  ngOnInit() {
    this.restService.getNames().subscribe((resp: any) => {
      this.names = resp;
      console.log("Names: " + this.names);
    });
  }
}
