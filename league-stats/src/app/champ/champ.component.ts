import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Observable } from 'rxjs';
import { Champion,Champions } from '../champion';


@Component({
  selector: 'app-champ',
  templateUrl: './champ.component.html',
  styleUrls: ['./champ.component.css']
})
export class ChampComponent implements OnInit {
  champName: string;
  name: string;
  title1: string;
  lore: string;
  champions$: Observable<Champions>;
  champion$: Observable<Champion>;
  title = 'api-test';

  constructor(private configService: ConfigService) {}

  ngOnInit() {
    this.champions$ = this.getAllChampions();
  }

  getAllChampions() {
    return this.configService.getChampion();
  }

  onSubmit() {
  let subs = this.champions$.subscribe((res) => {
      this.lore = res.data[this.champName].blurb;
      this.name = res.data[this.champName].name;
      this.title1 = res.data[this.champName].title;
    });
   
    
    
  }


  ngOnDestroy() {
    
  }
}