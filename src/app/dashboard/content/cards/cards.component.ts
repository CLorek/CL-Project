import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';


@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  cards = [ {id: 1, name: "Headline 1"},
            {id: 2, name: "Headline 2"},
            {id: 3, name: "Headline 3"},
            {id: 4, name: "Headline 4"},
            {id: 5, name: "Headline 5"},
            {id: 6, name: "Headline 6"},
            {id: 7, name: "Headline 7"},
            {id: 8, name: "Headline 8"},
  ]
}
