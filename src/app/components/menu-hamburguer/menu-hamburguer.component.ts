import { Component, HostListener } from '@angular/core';
import { AutenticacaoService } from '../../services/autenticacao.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-hamburguer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-hamburguer.component.html',
  styleUrls: ['./menu-hamburguer.component.css']
})
export class MenuHamburguerComponent {
  constructor(private authService: AutenticacaoService, private router: Router) { }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  isMenuOpen = false;

  toggleMenu(event: MouseEvent) {
    event.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    const clickedInsideMenu = target.closest('.menu-container');
    const clickedLogo = target.closest('.menu-logo');
    if (!clickedInsideMenu && !clickedLogo) {
      this.isMenuOpen = false;
    }
  }
}
