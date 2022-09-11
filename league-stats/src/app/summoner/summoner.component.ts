import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../config.service';
import { SummonerDTO } from '../summoner-dto';

@Component({
  selector: 'app-summoner',
  templateUrl: './summoner.component.html',
  styleUrls: ['./summoner.component.css']
})
export class SummonerComponent implements OnInit {

  summonerId:string;
  summoner$:Observable<SummonerDTO>;
  icon:number;
  lastChecked:number;
  puuID:string;

  constructor(private configService:ConfigService) { }

  ngOnInit(): void {


  
  

  }

  onSubmit() {

    this.summoner$ =this.configService.getSummoner(this.summonerId);
    this.summoner$.subscribe(
      data => {
      this.puuID = data.puuid;
      this.icon = data.profileIconId;
      


      }


    )

console.log(this.puuID+this.icon)  }


}
