import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigComponent } from './config/config.component';
import { ChampComponent } from './champ/champ.component';
import { SummonerComponent } from './summoner/summoner.component';
import { HomeComponent } from './home/home.component';
import { ChampionPageComponent } from './champion-page/champion-page.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    ChampComponent,
    SummonerComponent,
    HomeComponent,
    ChampionPageComponent,
    NavbarComponent
  ],
  imports: [
    RouterModule.forRoot([]),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule
    

  ],
  providers: [ChampComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
