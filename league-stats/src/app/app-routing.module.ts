import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampComponent } from './champ/champ.component';
import { HomeComponent } from './home/home.component';
import { SummonerComponent } from './summoner/summoner.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path: 'champions',component:ChampComponent},
  {path:'summoner',component:SummonerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
