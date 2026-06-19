import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter 
{
  count=0;
  
  Increment()
  {
    this.count++;
  }
  Decrement()
  {
    if(this.count>0)
        this.count--;
  }
}
