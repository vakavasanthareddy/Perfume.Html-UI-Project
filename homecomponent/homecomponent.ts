import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-homecomponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homecomponent.html',
  styleUrl: './homecomponent.css',
})
export class Homecomponent {
  stats = [
    { value: '10x', label: 'power' },
    { value: '9', label: 'ingredients' },
    { value: '20K+', label: 'happy customers' }
  ];

  // 🔑 Accordion state
  activeAccordionIndex = 0;

  toggleAccordion(index: number) {
    this.activeAccordionIndex =
    this.activeAccordionIndex === index ? -1 : index;
  }
  selectedSubscription: 'single' | 'double' = 'single';
}

