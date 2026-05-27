import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { ServicesComponent } from './components/services/services';
import { CtaComponent } from './components/cta/cta';
import { GalleryComponent } from './components/gallery/gallery';
import { FooterComponent } from './components/footer/footer';
import { MiniMapComponent } from './components/mini-map/mini-map';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    CtaComponent,
    GalleryComponent,
    FooterComponent,
    MiniMapComponent
  ]
})
export class App {}
