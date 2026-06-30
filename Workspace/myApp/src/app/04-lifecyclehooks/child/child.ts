import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class ChildComponent implements AfterViewInit {

  @ViewChild('nameInput') nameInput!: ElementRef;

  ngAfterViewInit(): void {
    this.nameInput.nativeElement.focus();
  }
}