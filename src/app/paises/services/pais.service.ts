import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
//interface
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2'

  get httpParams (){//este es el getter para simplicar el uso de datos dentro de las peticiones
    return new HttpParams().set('fields','name;capital;alpha2Code;flag;population;altSpellings');
  }

  constructor(private http: HttpClient) { }

  //peticiones http
  buscarPais(termino: string): Observable< Country [] > {
    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<Country[]>( url, {params: this.httpParams} );//estos son filtros que hace que las petiones usen menos datos
    
  }

  buscarCapital ( termino:string ): Observable<Country []> {
    const url = `${ this.apiUrl }/capital/${termino}`;
    return this.http.get<Country []>( url, {params: this.httpParams}  );//estos son filtros que hace que las petiones usen menos datos
  }

  getPaisCodigo ( id:string ): Observable<Country> {
    const url = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<Country >( url);
  }

  buscarRegion( region:string ) {
    const url = `${ this.apiUrl }/region/${ region }`;
    return this.http.get< Country[] > (url, {params: this.httpParams} );//estos son filtros que hace que las petiones usen menos datos

  }

}
