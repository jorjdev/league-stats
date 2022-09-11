import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { ChampComponent } from '../champ/champ.component';
import { Router } from 'express';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-champion-page',
  templateUrl: './champion-page.component.html',
  styleUrls: ['./champion-page.component.css']
})
export class ChampionPageComponent implements OnInit {
  @Input() name:string;
  title:string;
  lore:string;
  champName:string;

  constructor(private configService:ConfigService,private route:ActivatedRoute) { }

  ngOnInit(): void {
   
    this.route.params.subscribe((params) => {
      this.name = params['id']
      
    })
     this.configService.getChampion().subscribe(
      data => {
       this.lore = data.data[this.name].blurb
       this.title = data.data[this.name].title
       
      })

  }

  // getChampionInfo() {

  //   return this.configService.getChampion().subscribe(
  //     data => {
  //      this.lore = data.data[this.name].blurb
  //      this.title = data.data[this.name].title
       
  //     }
  //   )
  // }

}
