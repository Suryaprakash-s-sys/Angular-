import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipe.html',
  styleUrl: './pipe.css',
})
export class PipeComponent 
{
  greet="Welcome to Angular";
  items=['item1','item2','item3','item4','item5']
  price=500;
}