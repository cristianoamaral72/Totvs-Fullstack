import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Login component. Provides a simple form with username and password
 * inputs bound using ngModel. Submitting the form logs the entered
 * credentials to the browser console. In a real application you would
 * replace this with proper authentication logic.
 */
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  username = '';
  password = '';

  /**
   * Handles form submission. Currently logs credentials to console.
   */
  onSubmit(): void {
    // For demonstration purposes, simply log credentials.
    // Replace this with real authentication calls as needed.
    console.log('Logging in:', { username: this.username, password: this.password });
  }
}