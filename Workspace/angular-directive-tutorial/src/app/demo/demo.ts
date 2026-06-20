import { Component } from '@angular/core';
import { HighlightDirective } from '../highlight';

@Component({
  selector: 'app-demo',
  standalone:true,
  imports: [HighlightDirective],
  templateUrl: './demo.html',
  styleUrl: './demo.css',
})
export class Demo {}
