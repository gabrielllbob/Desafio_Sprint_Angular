import { Component } from '@angular/core';
import { CabecalhoComponent } from '../../components/cabecalho/cabecalho.component';
import { BannerLoginComponent } from '../../components/login/banner-login/banner-login.component';
import { FormularioLoginComponent } from '../../components/login/formulario-login/formulario-login.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CabecalhoComponent, BannerLoginComponent, FormularioLoginComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

}
