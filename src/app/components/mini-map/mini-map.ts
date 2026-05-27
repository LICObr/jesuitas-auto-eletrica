import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-mini-map',
  templateUrl: './mini-map.html',
  styleUrl: './mini-map.scss'
})
export class MiniMapComponent {
  mapsUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.mapsUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.4238707861314!2d-51.90712372457354!3d-23.400651655707858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd104b7ebe20b%3A0x4f72f2d969884036!2sJESU%C3%8DTAS%20AUTO%20EL%C3%89TRICA!5e1!3m2!1spt-BR!2sbr!4v1753448097797!5m2!1spt-BR!2sbr'
    );
  }
}
