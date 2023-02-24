import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsComponent } from "./comics/comics.component";
import { HomeComponent } from "./home/home.component";
import {DetailsComicsComponent } from "./comics/details.component"
import { CharactersComponent } from './characters/characters.component';
import { SeriesComponent } from './series/series.component';
import { DetailsCharactersComponent } from './characters/details.component';
import { DetailsSeriesComponent } from './series/details.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"comics",component:ComicsComponent},
  {path:"home",component:HomeComponent},
  {path:"detailsComics",component:DetailsComicsComponent},
  {path:'detailsComics/:id', component: DetailsComicsComponent },
  {path:"characters",component:CharactersComponent},
  {path:"series",component:SeriesComponent},
  {path:"detailsCharacters",component:DetailsCharactersComponent},
  { path: 'detailsCharacters/:id', component: DetailsCharactersComponent },
  {path:"detailsSeries",component:DetailsSeriesComponent},
  { path: 'detailsSeries/:id', component: DetailsSeriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
