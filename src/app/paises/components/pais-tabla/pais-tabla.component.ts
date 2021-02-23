import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
})
export class PaisTablaComponent  {

  @Input() paises: Country [] = [];
  public page:number=1;
  public pageSize:number=10;


  constructor() { }


}
