import { CommonModule } from '@angular/common';
import { Component,} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  imports: [CommonModule,FormsModule],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter 
{
    applyred=false
}
