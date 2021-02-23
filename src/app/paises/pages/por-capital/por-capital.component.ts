import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  termino  : string  = '';
  hayError : boolean = false;
  capitales: Country [] = [];


  constructor(private _paisService: PaisService) { }



  buscar(termino:string) {
    this.hayError = false;
    this.termino  = termino;
    this._paisService.buscarCapital(this.termino)
            .subscribe((capitales)=>{
              this.capitales = capitales;
            
            },(err)=>{
              this.hayError = true;
              this.capitales = [];
            })

  }



}
