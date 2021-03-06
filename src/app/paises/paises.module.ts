import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';//este es es para los formularios.
import { RouterModule} from '@angular/router';//este es para trabajar con las rutas
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';






@NgModule({
  declarations: [PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent,
    PaisTablaComponent,
    PaisInputComponent,
    ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModule
  
  ],
  exports: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PaisesModule { }
