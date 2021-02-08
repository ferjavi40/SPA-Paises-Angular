import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino : string = '';
  hayError: boolean = false;
  paises  : Country [] = [];

  constructor(private _paisService: PaisService) { }
  //aui estoy aprendiendo a manejar los errores ya despues de consumirlo con el subscribe
  buscar() {
    if (this.termino.trim().length === 0) {
      return
    }
    this.hayError = false;
    console.log(this.termino);
    this._paisService.buscarPais(this.termino)
          .subscribe((paises) => {
            // console.log(paises);
            this.paises=paises;
          },(err)=>{
            this.hayError = true;
            this.paises = [];
          });

    
  }


}
