import { Component } from '@angular/core';
import { Tarea } from 'src/models/tarea.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrayTareas: Tarea[];

  constructor() {
        this.arrayTareas = [];
  }

  onTareaCreada($event: Tarea) {
    // console.log($event);
    this.arrayTareas.push($event);
  }
}
