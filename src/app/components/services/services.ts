import { Component } from '@angular/core';

interface Service {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class ServicesComponent {
  services: Service[] = [
    {
      icon: 'bi-lightning-charge',
      title: 'Manutenção Elétrica',
      description: 'Diagnóstico preciso e reparo completo em sistemas elétricos de carros e caminhões com equipamentos modernos.'
    },
    {
      icon: 'bi-gear',
      title: 'Alternadores e Motores',
      description: 'Revisão, recondicionamento e substituição de alternadores e motores de arranque com qualidade garantida.'
    },
    {
      icon: 'bi-tools',
      title: 'Peças e Acessórios',
      description: 'Trabalhamos com peças de alta qualidade, com garantia de procedência e compatibilidade para o seu veículo.'
    },
    {
      icon: 'bi-speedometer2',
      title: 'Diagnóstico Eletrônico',
      description: 'Leitura de falhas, reset de injeção eletrônica e diagnóstico completo com scanner profissional.'
    },
    {
      icon: 'bi-plug',
      title: 'Cabos e Chicotes',
      description: 'Instalação e reparo de cabos elétricos, chicotes e conectores para todo tipo de veículo.'
    },
    {
      icon: 'bi-truck',
      title: 'Caminhões e Pesados',
      description: 'Atendimento especializado para veículos pesados, ônibus e equipamentos agrícolas.'
    }
  ];
}
