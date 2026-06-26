import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List 
{
  @Input() carNames:string[]=[];
}
