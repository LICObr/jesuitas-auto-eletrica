import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[spotlight]',
  standalone: true
})
export class SpotlightDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const rect = this.el.nativeElement.getBoundingClientRect();
    this.el.nativeElement.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    this.el.nativeElement.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  }
}
