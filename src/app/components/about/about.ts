import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { CounterDirective } from '../../directives/counter.directive';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
  imports: [AnimateOnScrollDirective, CounterDirective]
})
export class AboutComponent {
  stats = [
    { numeric: 26, suffix: '+', label: 'Anos de experiência' },
    { numeric: 70,  suffix: 'k+', label: 'Veículos atendidos' },
    { numeric: 100, suffix: '%', label: 'Satisfação dos clientes' },
    { numeric: 24, suffix: 'h', label: 'Diagnóstico rápido' }
  ];
}
