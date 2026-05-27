import { Component } from '@angular/core';

interface GalleryItem {
  src: string;
  alt: string;
  label: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class GalleryComponent {
  items: GalleryItem[] = [
    {
      src: 'assets/images/alternador.png',
      alt: 'Alternador',
      label: 'Alternadores'
    },
    {
      src: 'assets/images/motor-de-arranque.png',
      alt: 'Motor de arranque',
      label: 'Motores de Arranque'
    },
    {
      src: 'assets/images/cabos.png',
      alt: 'Cabos elétricos',
      label: 'Cabos Elétricos'
    }
  ];
}
