import { Component } from '@angular/core';
import { AutenticacaoService } from '../../../services/autenticacao.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Usuario } from '../../../models/usuario.model';

@Component({
  selector: 'app-formulario-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent {
  constructor(private authService: AutenticacaoService, private router: Router) { }

  alterarLembrar() {
    this.login.lembrar = !this.login.lembrar;
  }
  formSubmit() {
    console.log(this.login);
    this.authService.autenticar(this.login.nome, this.login.senha, this.login.lembrar)
      .subscribe({
        next: () => {
          console.log('Usuário autenticado com sucesso!');
          this.router.navigate(['/home']); 
        },
        error: (error) => {
          console.error('Erro na autenticação:', error);
          alert('Usuário ou senha inválidos.');
        }
      });
  }
  togglePassword() {
    this.login.showPassword = !this.login.showPassword;
  }
  login: Usuario = {
    id: '',
    nome: '',
    senha: '',
    email: '',
    lembrar: false,
    showPassword: false
  }
}
