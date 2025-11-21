import { Component } from '@angular/core';
import { MenuHamburguerComponent } from '../../components/menu-hamburguer/menu-hamburguer.component';
import { VehicleComponent } from '../../components/dashboard/vehicle/vehicle.component';
import { VehicleDadosComponent } from '../../components/dashboard/vehicle-dados/vehicle-dados.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MenuHamburguerComponent, VehicleComponent, VehicleDadosComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

}
