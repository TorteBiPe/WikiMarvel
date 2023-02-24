import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComicsComponent } from "./comics/comics.component";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetailsComicsComponent } from './comics/details.component';
import { FormsModule } from '@angular/forms';
import { CharactersComponent } from './characters/characters.component';
import { SeriesComponent } from './series/series.component';
import { DetailsCharactersComponent } from './characters/details.component';
import { DetailsSeriesComponent } from './series/details.component';
import { HeaderComponent } from './header/header.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

const routes: Routes = [

  {path:"comics",component:ComicsComponent},
  {path:"characters",component:CharactersComponent},
  {path:"series",component:SeriesComponent},
  {path:"home",component:HomeComponent},
  {path:"detailsComics",component:DetailsComicsComponent},
  { path: 'detailsComics/:id', component: DetailsComicsComponent },
  {path:"detailsCharacters",component:DetailsCharactersComponent},
  { path: 'detailsCharacters/:id', component: DetailsCharactersComponent },
  {path:"detailsSeries",component:DetailsSeriesComponent},
  { path: 'detailsSeries/:id', component: DetailsSeriesComponent }

];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComicsComponent,
    CharactersComponent,
    SeriesComponent,
    DetailsComicsComponent,
    DetailsCharactersComponent,
    DetailsSeriesComponent,
    HeaderComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
