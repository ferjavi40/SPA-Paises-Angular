import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';//este es para subscrbirse a los cambios de la url
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';

import { Country } from '../../interfaces/pais.interface';
//Loading
import { NgxUiLoaderService } from 'ngx-ui-loader';





@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: Country;// el signo de interrogacion se pone para decirle a typescript es poniendo un signo de admiracion

  //el activatedRoute se utiliza para vigilar los cambios en las rutas en este caso el ID
  constructor(
    private activatedRoute: ActivatedRoute,
    private _paisService: PaisService,
    private ngxLoader: NgxUiLoaderService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap((param) => this._paisService.getPaisCodigo(param.id)),
        tap(console.log)
          )
          .subscribe(pais => this.pais = pais);

    // this.activatedRoute.params
    //   .subscribe(({ id }) => {
    //     console.log(id);

    //     this._paisService.getPaisCodigo( id ) 
    //         .subscribe( pais =>{
    //           console.log(pais);
    //         });
    //   });
    this.ngxLoader.start();
    this.http.get(`https://api.npmjs.org/downloads/range/last-year/ngx-ui-loader`).subscribe((res: any) => {
      // console.log(res);
      this.ngxLoader.stop();
    });
    

  }

  

}
