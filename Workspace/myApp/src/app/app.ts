import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit
 {
  user:any = null;

  ngOnInit(){
    this.user = {
      name : 'surya'
    }
  }
}