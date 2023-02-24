import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {catchError, Observable, throwError } from "rxjs";
import { Characters } from "./character";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class CharactersService {

  private urlEndPoint: string = 'https://gateway.marvel.com:443/v1/public/characters';
  private apikey: string="?ts=1000&apikey=216bdedac3bbdf43509292174b5058b7&hash=164c39c3123c865116a0a9ae5393dfeb"
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http: HttpClient, private router: Router) {}

  //Obtenemos todos los personajes
  getCharacters(): Observable<any> {
    return this.http.get(this.urlEndPoint+this.apikey);
  }

  //Obtenemos un personaje en especifico
  getCharacter(id: any): Observable<Characters> {
    return this.http.get<Characters>(`${this.urlEndPoint}/${id}`+`${this.apikey}`).pipe(
      catchError(e => {
        this.router.navigate(['/characters']);
        console.error(e.error.mensaje);
        return throwError(() =>e);
      })
    );
  }
}