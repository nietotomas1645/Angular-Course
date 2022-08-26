import { Component, OnInit, Injectable,ChangeDetectorRef} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrecioBitcoinProvider{
  precio: number = 100;

  constructor(){

    // CADA MEDIO SEGUNDO se va a generar un nuevo precio del bitcoin
    setInterval (() =>{
      this.precio = Math.floor(Math.random() * 1000) + 100;
      console.log(`Precio Actual: ${this.precio}$`)
    },500)
  }
}



@Component({
  selector: 'app-reattach',
  templateUrl: './reattach.component.html',
  styleUrls: ['./reattach.component.css'],
  inputs: ['enVivo']
})
export class ReattachComponent implements OnInit {

  mostrarEnVivo: boolean = true;


  constructor(private _ref: ChangeDetectorRef, public precioBitcoin: PrecioBitcoinProvider) { }

    set enVivo(valor: boolean){
      this.mostrarEnVivo = valor;
      
      if(valor){
        this._ref.reattach(); // reacoplamos TS y HTML para ver los cambios en vivo en el html
      }else{
        this._ref.detach(); // Desacoplamos el TS y HTML para no actualizar la vista con los cambios
      }
    }


  ngOnInit(): void {
  }

}
