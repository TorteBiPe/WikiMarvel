import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {catchError, Observable, throwError } from "rxjs";
import { Comics } from "./comic";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class ComicsService {

  private urlEndPoint: string = 'https://gateway.marvel.com:443/v1/public/comics';
  private apikey: string="?ts=1000&apikey=216bdedac3bbdf43509292174b5058b7&hash=164c39c3123c865116a0a9ae5393dfeb"
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http: HttpClient, private router: Router) {}

  //Obtenemos todos los comics
  getComics(): Observable<any> {
    return this.http.get(this.urlEndPoint+this.apikey);
  }

  //Obtenemos un comic en especifico
  getComic(id: any): Observable<Comics> {
    return this.http.get<Comics>(`${this.urlEndPoint}/${id}`+`${this.apikey}`).pipe(
      
      catchError(e => {
        this.router.navigate(['/comics']);
        console.error(e.error.mensaje);
        return throwError(() =>e);
      })
    );
  }
}