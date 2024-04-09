import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  description = 'Lorem ipsum dolor sit amet consectetur. Pellentesque tempor a lorem aenean pulvinar at. Ultrices proin arcu at viverra odio mollis et dictum. Tellus elementum tortor metus at pretium at. Dictum tincidunt viverra ultrices lectus aliquam.'
}
