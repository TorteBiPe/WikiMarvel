import { OnInit,Component } from '@angular/core';
import { SeriesService } from '../series/series.service';
@Component({
    templateUrl: './series.component.html',
    styleUrls: ['./styles/style.css']
  })

export class SeriesComponent implements OnInit {
    // Variable que usamos para recoger las series
    series!: any;  
    // Variable que usa el paginador
    public page: number | undefined;

    constructor(public seriesService: SeriesService) { }
  
    ngOnInit(): void {

      //Recogemos los datos del API
      this.seriesService.getSeries().subscribe( (data: any) => {

        let cardInfo: any[][]=[];
        let results= data.data.results;

        //Recogemos los datos que nos interesen sacar

        results.forEach((serie: { title: any; description:any; images:any; id:any; thumbnail:any}) => {

            let id=serie.id
            let title= serie.title;
            let description= serie.description;
            let urlimage=serie.thumbnail.path+"."+serie.thumbnail.extension;
            if(serie.description){
                let info= [id,title,description,urlimage];
                cardInfo.push(info)
            }
            
        });

        this.series=cardInfo;

            })
    }
  
  }