import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, CardsComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {}
