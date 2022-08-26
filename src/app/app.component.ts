import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngChangeDetection';

  // Variable para el ejemplo de REATTACH

  live: boolean = true;
  
}
