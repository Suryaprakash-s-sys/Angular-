import { Directive, ElementRef, HostListener, input, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone:true
})


export class HighlightDirective
{
  
  @Input() appHighlight='';

  @HostListener('mouseenter') onMouseEnter()
  {
    this.highlight(this.appHighlight || 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave()
  {
    this.highlight('');
  }

  constructor(private el:ElementRef)
  {

  }

  private highlight(color : string)
  {
    this.el.nativeElement.style.backgroundColor=color;
  }


}
