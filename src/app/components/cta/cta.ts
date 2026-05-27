import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.html',
  styleUrl: './cta.scss',
  imports: [AnimateOnScrollDirective]
})
export class CtaComponent {
  whatsappUrl = 'https://wa.me/5544991362007?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20atendimento.';
}
