import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input()
      title: String | undefined;


  menu = [ {id: 1, name: "Tag 1"},
           {id: 2, name: "Tag 2"},
           {id: 3, name: "Tag 3"},
           {id: 4, name: "Tag 4"},
  ]

  description = 'Lorem ipsum dolor sit amet consectetur. Pellentesque tempor a lorem aenean pulvinar at. Ultrices proin arcu at viverra odio mollis et dictum. Tellus elementum tortor metus at pretium at. Dictum tincidunt viverra ultrices lectus aliquam.'

}
