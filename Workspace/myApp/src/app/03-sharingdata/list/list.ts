import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CarService } from '../../car';

@Component({
  selector: 'app-list',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List implements OnInit
{
  carNames:string[]=[]

  constructor(private carService : CarService)
  {

  }

  ngOnInit(): void 
  {
    this.carService.carNames$.subscribe((names)=>{
      this.carNames=names;
    })
  }
}
