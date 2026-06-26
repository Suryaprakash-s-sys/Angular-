import { CommonModule } from '@angular/common';
import { Component, Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  @Output() carAdded=new EventEmitter<string>();

  onsubmit()
  {
    console.log(this.CarName + "Added Successfully to wishlist")
    //sending the value to list component
    this.carAdded.emit(this.CarName);
    
  }

}
