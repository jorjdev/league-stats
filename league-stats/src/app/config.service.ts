import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Champion,Champions } from './champion';
import { SummonerDTO } from './summoner-dto';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  
   API_KEY = 'RGAPI-9d17393a-c1ad-4529-9f0a-77af96bb5eed';
   summonerName = 'Carici';
   API_CALL_STRING = 'https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/';
  champions$: Observable<Champions>;
  



  

  constructor(private  http:HttpClient) {
    



   }

getChampion() : Observable<Champions> {
  

   this.champions$ = this.http.get<Champions>('http://ddragon.leagueoflegends.com/cdn/12.17.1/data/en_US/champion.json');
   return  this.champions$;
}


getSummoner(summonerId:string) {

  const API_CALL = this.API_CALL_STRING+summonerId+'?api_key='+this.API_KEY;

return this.http.get<SummonerDTO>(API_CALL);

}
}