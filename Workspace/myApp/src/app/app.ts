import { Component, OnInit, Pipe } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Counter } from './01-signals/counter/counter';
import { PipeComponent } from './02-pipes/pipe/pipe';
import { CommonModule } from '@angular/common';
import { Forms } from './03-sharingdata/forms/forms';
import { List } from './03-sharingdata/list/list';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Forms,PipeComponent,List],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App 
{

  carNames:string[]=[];

onCarAdded(carName: string) {
  this.carNames.push(carName);
  console.log(this.carNames);
}
}