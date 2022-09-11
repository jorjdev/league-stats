import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../config.service';
import { Champion } from '../champion';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  constructor(private configService:ConfigService) { }

  champion$ : Observable<Champion>  ;

  ngOnInit(): void {

  
  }



}
