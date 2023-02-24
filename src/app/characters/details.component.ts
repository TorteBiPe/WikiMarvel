import { OnInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from './characters.service';

@Component({
  templateUrl: './details.component.html',
  styleUrls: ['./styles/style.css']
})
export class DetailsCharactersComponent implements OnInit {
  public detail: any;
  comicsCharact!: any;
  storiesCharact!: any;
  seriesCharact!: any;
  constructor(
    public charactersService: CharactersService,

    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.chargeDetails();
  }
  chargeDetails(): void {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];

      if (id) {
        this.charactersService.getCharacter(id).subscribe((data: any) => {
          this.detail = data;

          let results = data.data.results[0];

          //Recogemos los comics de la serie seleccionada
          this.comicsCharact = results.comics.items.slice(0,4);
          //Recogemos las historias de la serie seleccionada
          this.storiesCharact = results.stories.items.slice(0,4);
          //Recogemos las series de la serie seleccionada
          this.seriesCharact = results.series.items.slice(0,4);

          //Recogemos los datos que nos interesen sacar

          let title = results.title;
          let name = results.name;
          let description = results.description;
          let urlimage =
            results.thumbnail.path + '.' + results.thumbnail.extension;

          if (title == null) title = name;

            this.detail = [title, description, urlimage];
          
        });
      }
    });
  }
}
