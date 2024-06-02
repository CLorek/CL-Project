import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./dashboard/card/card.component";
import { AppbarComponent } from './appbar/appbar.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, CardComponent, AppbarComponent]
})
export class AppComponent {
  title = 'Dashboard';
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
