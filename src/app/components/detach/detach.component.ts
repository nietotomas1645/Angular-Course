import { Component, OnInit, Injectable, ChangeDetectorRef } from '@angular/core';
import * as Mock from 'mockjs';

@Injectable ({
  providedIn: 'root'
})
export class DataListProvider{

  /**
   * Metodo que devuelve una lista de nombres aleatorios
   * @return {[]} lista de nombres aleatorios
   * 
   */
  get data(){
    const RandomName = Mock.Random;
    return[
        RandomName.first(),
        RandomName.first(),
        RandomName.first(),
        RandomName.first(),
        ];
    
  }
}





@Component({
  selector: 'app-detach',
  templateUrl: './detach.component.html',
  styleUrls: ['./detach.component.css']
})
export class DetachComponent implements OnInit {

  constructor(private _ref: ChangeDetectorRef, public dataListProvider: DataListProvider) { }

  ngOnInit(): void {
    // * Desacoplamos el componente del html con el metodo DETACH

    this._ref.detach();


    /* 
    ** Cuando un componente esta DESACOPLADO, Solo hay dos formas de decirle que
    ** replique los cambios en el HTML:
    **
    **1: detectChanges() --> Detectar los cambios en ese momento y actualizar html
    **2: reattach() -- > (mostrado en el otro ejemplo ) sirve para volver a ACOPLAR el componenete (TS Y HTML)
    */

    // cada 3 segundos, le decimos a Angular que revise los nombres generados
    // es decir, que detecte los cambios en el componente y los replique en el html
    setInterval(()=>{
      // Detectamos los cambios y reacoplamos puntualmente el componente
      this._ref.detectChanges();
    }, 3000);
    
    


  }

}
