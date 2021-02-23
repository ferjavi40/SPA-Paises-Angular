import { Component } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  regiones: string [] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';

  constructor() { }

  getClase(region: string) {
    return (region === this.regionActiva) ? 'btn btn-secondary mr-2' : 'btn btn-outline-secondary mr-2';
  }

  activarRegion(region: string) {
    this.regionActiva = region;
    console.log(region);

    //TODO: hacer el llamado al servicio
  }


}
