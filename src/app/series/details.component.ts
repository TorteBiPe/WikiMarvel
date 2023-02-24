import { OnInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeriesService } from './series.service';
@Component({
  templateUrl: './details.component.html',
  styleUrls: ['./styles/style.css'],
})
export class DetailsSeriesComponent implements OnInit {
  public detail: any;
  comicsSerie!: any;
  storiesSerie!: any;
  constructor(
    public seriesService: SeriesService,

    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.chargeDetails();
  }
  chargeDetails(): void {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      if (id) {
        this.seriesService.getSerie(id).subscribe((data: any) => {
          this.detail = data;
          let results = data.data.results[0];

          //Recogemos los comics de la serie seleccionada
          this.comicsSerie = results.comics.items;

          //Recogemos las historias de la serie seleccionada y hacemos una filtración solo de las historias
          this.storiesSerie = results.stories.items.filter(
            (item: { name: any }) => item.name.startsWith('story')
          );

          //Recogemos los datos que nos interesen sacar
          let character: any;
          let title = results.title;
          let description = results.description;
          let urlimage =
            results.thumbnail.path + '.' + results.thumbnail.extension;
          if (results.characters.returned != 0)
            character = results.characters.items[0].name;

          if (results.description)
            this.detail = [title, description, urlimage, character];

        });
      }
    });
  }
}
