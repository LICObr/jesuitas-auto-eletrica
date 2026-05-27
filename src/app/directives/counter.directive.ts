import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[counter]',
  standalone: true
})
export class CounterDirective implements OnInit {
  @Input() target = 0;
  @Input() suffix = '';
  @Input() duration = 1800;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.animate();
          observer.unobserve(this.el.nativeElement);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(this.el.nativeElement);
  }

  private animate() {
    const el = this.el.nativeElement;
    const startTime = performance.now();

    const update = (now: number) => {
      const progress = Math.min((now - startTime) / this.duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * this.target) + this.suffix;
      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }
}
