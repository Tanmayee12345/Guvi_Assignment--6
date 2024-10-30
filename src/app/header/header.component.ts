import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] // Change 'styleUrl' to 'styleUrls'
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMobileMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
}
