import { AfterContentInit, Component, ContentChildren, contentChildren, DoCheck, ElementRef, OnChanges, OnInit, Pipe, QueryList, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './04-lifecyclehooks/child/child';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ChildComponent,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App 
{
}
