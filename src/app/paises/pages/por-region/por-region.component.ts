import { Component } from '@angular/core';
//servicios
import { PaisService } from '../../services/pais.service';
//interfaces
import { Country } from '../../interfaces/pais.interface';



@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  regiones: string [] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionesActivas: Country [] = [];
  regionActiva: string = '';

  constructor( private _paisServicio: PaisService) { }

  getClase(region: string) {
    return (region === this.regionActiva) ? 'btn btn-secondary mr-2' : 'btn btn-outline-secondary mr-2';
  }

  activarRegion(region: string) {
    if(region === this.regionActiva){ return; }
    this.regionActiva = region;
    this.regionesActivas = [];
    this._paisServicio.buscarRegion(this.regionActiva)
          .subscribe((region)=>{
            this.regionesActivas= region;
            console.log(this.regionesActivas);
          })


    // console.log(region);

    //TODO: hacer el llamado al servicio
  }


}
