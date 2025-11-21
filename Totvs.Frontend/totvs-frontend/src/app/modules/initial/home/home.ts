import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Simple Home component. This standalone component shows a welcome message
 * when navigated to via the router.
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  // Additional logic for the Home component can be added here in the future.
}