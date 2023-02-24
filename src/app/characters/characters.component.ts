import { OnInit,Component } from '@angular/core';
import { CharactersService } from '../characters/characters.service';
@Component({
    templateUrl: './characters.component.html',
    styleUrls: ['./styles/style.css']
  })


export class CharactersComponent implements OnInit {
    characters!: any;
    public page: number | undefined;
    constructor(public charactersService: CharactersService) { }
  
    ngOnInit(): void {

      //Recogemos los datos del API
      this.charactersService.getCharacters().subscribe( (data: any) => {

        let cardInfo: any[][]=[];
        let results= data.data.results;

        //Recogemos los datos que nos interesen sacar

        results.forEach((character: { name: any; description:any; images:any; id:any; thumbnail:any}) => {

            let id=character.id
            let name= character.name;
            let description= character.description;
            let urlimage=character.thumbnail.path+"."+character.thumbnail.extension;

                let info= [id,name,description,urlimage];
                cardInfo.push(info)
            
            
        });

        this.characters=cardInfo;

            })
    }
  
  }