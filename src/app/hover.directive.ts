import {
  Directive,
  OnInit,
  ElementRef,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[hotelHover]',
})
export class HoverDirective implements OnInit {
  @Input() hotelHover: string = 'red';

  constructor(private element: ElementRef) {
    // console.log(element.nativeElement);
  }

  ngOnInit(): void {}

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = this.hotelHover;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = 'white';
  }
}
