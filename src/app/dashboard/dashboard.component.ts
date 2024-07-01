import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ContentComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  @Input()
      title: String | undefined;
}
