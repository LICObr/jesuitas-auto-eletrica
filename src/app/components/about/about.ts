import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  stats = [
    { value: '15+', label: 'Anos de experiência' },
    { value: '5k+', label: 'Veículos atendidos' },
    { value: '100%', label: 'Peças com garantia' },
    { value: '24h', label: 'Diagnóstico rápido' }
  ];
}
