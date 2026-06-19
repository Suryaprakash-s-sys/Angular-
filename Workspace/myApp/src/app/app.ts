import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Counter } from './01-signals/counter/counter';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, Counter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App 
 {
  
}