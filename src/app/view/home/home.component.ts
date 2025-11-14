import { Component } from '@angular/core';
import { MenuHamburguerComponent } from '../../components/menu-hamburguer/menu-hamburguer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuHamburguerComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
