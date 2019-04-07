import { Component, OnInit } from '@angular/core';
import {LoggerService} from "../services/logger.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private logService: LoggerService) { }

  ngOnInit() {
  }

  log2Service(){
    this.logService.loggeer('Home Component');
  }

}
