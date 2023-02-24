import { OnInit, Component } from '@angular/core';
import { ComicsService } from '../comics/comics.service';
@Component({
  templateUrl: './comics.component.html',
  styleUrls: ['./styles/style.css'],
})
export class ComicsComponent implements OnInit {
  comics!: any;
  public page: number | undefined;
  constructor(public comicsService: ComicsService) {}


  ngOnInit(): void {
    
    //Recogemos los datos del API
    this.comicsService.getComics().subscribe((data: any) => {
      let cardInfo: any[][] = [];
      let results = data.data.results;

      //Recogemos los datos que nos interesen sacar

      results.forEach(
        (comic: {
          title: any;
          description: any;
          images: any;
          id: any;
          thumbnail: any;
        }) => {
          let id = comic.id;
          let title = comic.title;
          let description = comic.description;
          let urlimage = comic.thumbnail.path + '.' + comic.thumbnail.extension;
          if (comic.description) {
            let info = [id, title, description, urlimage];
            cardInfo.push(info);
          }
        }
      );

      this.comics = cardInfo;
    });

  }

}
