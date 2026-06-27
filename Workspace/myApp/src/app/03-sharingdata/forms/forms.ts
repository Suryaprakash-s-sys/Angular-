import { CommonModule } from '@angular/common';
import { Component, Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarService } from '../../car';

@Component({
  selector: 'app-forms',
  standalone :true,
  imports: [CommonModule,FormsModule],
  templateUrl: './forms.html',
  styleUrl: './forms.css',
})
export class Forms 
{
  CarName:string='';

  constructor(private carService : CarService)
  {

  }

  onsubmit()
  {
    console.log(this.CarName + "Added Successfully to wishlist")
 
    //sending data using carservice
    this.carService.addCarName(this.CarName);
        
    this.CarName='';
    
  }

}
