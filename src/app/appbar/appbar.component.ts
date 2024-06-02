import { Component } from '@angular/core';
import { MatToolbar } from "@angular/material/toolbar";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-appbar',
  standalone: true,
  imports: [MatToolbar, MatButtonModule, MatIconModule],
  templateUrl: './appbar.component.html',
  styleUrl: './appbar.component.scss'
})
export class AppbarComponent {

}
