import { Component, OnInit } from '@angular/core';
import { NgxParticlesModule, NgParticlesService } from '@tsparticles/angular';
import { loadSlim } from '@tsparticles/slim';
import type { ISourceOptions } from '@tsparticles/engine';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  imports: [NgxParticlesModule]
})
export class HeroComponent implements OnInit {
  particlesId = 'hero-particles';

  particlesOptions: ISourceOptions = {
    fpsLimit: 60,
    particles: {
      number: { value: 80, density: { enable: true } },
      color: { value: ['#e63946', '#ffffff', '#ff6b6b'] },
      shape: { type: 'circle' },
      opacity: { value: { min: 0.4, max: 0.9 } },
      size: { value: { min: 1, max: 3.5 } },
      links: {
        enable: true,
        distance: 120,
        color: '#e63946',
        opacity: 0.25,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.2,
        direction: 'none',
        outModes: { default: 'bounce' }
      }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'grab' },
        onClick: { enable: true, mode: 'push' }
      },
      modes: {
        grab: { distance: 160, links: { opacity: 0.8, color: '#ffffff' } },
        push: { quantity: 3 }
      }
    },
    background: { color: 'transparent' },
    detectRetina: true
  };

  constructor(private particlesService: NgParticlesService) {}

  async ngOnInit() {
    await this.particlesService.init(async (engine) => {
      await loadSlim(engine);
    });
  }
}
