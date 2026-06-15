import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  // templateUrl: './app.html',
  template:'<h1>{{title}}</h1>',
  styleUrl: './app.css'
})
export class App {
  title='myApp';
}
