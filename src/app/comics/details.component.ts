import { OnInit,Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComicsService } from '../comics/comics.service';
import { Comics } from './comic';
@Component({
    templateUrl: './details.component.html',
    styleUrls: ['./styles/style.css']
  
  })
export class DetailsComicsComponent implements OnInit {
  public detail: any;
    constructor(
      public comicsService: ComicsService,

      private activatedRoute: ActivatedRoute
      ) { }
  
    ngOnInit(): void {
        this.chargeDetails()
    }
    chargeDetails():void{
      this.activatedRoute.params.subscribe(params=>{
        let id=params['id'];

        if(id){
          this.comicsService.getComic(id).subscribe( (data: any) => {
            this.detail=data
            
            let results= data.data.results[0];

            //Recogemos los datos que nos interesen sacar

            let title= results.title;
            let description= results.description;
            let pageCount= results.pageCount;
            let stories=results.stories.items[0].name;
            let price= results.prices[0].price+"€";
            let urlimage=results.thumbnail.path+"."+results.thumbnail.extension;
            if(results.description){
              
              this.detail= [title,description,urlimage,pageCount,price,stories];

            }

          })
                
        }
      })
      
    }
  
  }