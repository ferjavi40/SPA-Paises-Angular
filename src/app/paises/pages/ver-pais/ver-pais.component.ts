import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {
  //el activatedRoute se utiliza para vigilar los cambios en las rutas en este caso el ID
  constructor(
    private activatedRoute: ActivatedRoute,
    private _paisService: PaisService
  ) { }

  ngOnInit(): void {

      this.activatedRoute.params
          .pipe(
            switchMap( (param) => this._paisService.getPaisCodigo(param.id))
          )
          .subscribe( resp =>{
            console.log(resp);
          });

    // this.activatedRoute.params
    //   .subscribe(({ id }) => {
    //     console.log(id);

    //     this._paisService.getPaisCodigo( id ) 
    //         .subscribe( pais =>{
    //           console.log(pais);
    //         });
    //   });

  }

}
