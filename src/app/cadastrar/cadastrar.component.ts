import { AuthService } from './../service/auth.service';

import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario
  confirmSenha: string
  tipoUsuario: string

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmarSenha (event: any) {
    this.confirmSenha = event.target.value
  }

  tipoDeUsuario (event: any) {
    this.tipoUsuario = event.target.value
  }

  cadastrar () {
    this.usuario.tipo = this.tipoUsuario

    if (this.usuario.senha != this.confirmSenha) {
      alert('As senhas estão incorretas.')
    }
    else {
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
      this.usuario = resp
      this.router.navigate(['/entrar'])
      alert('Usuário cadastrado com sucesso!!')
      })
    }
  }
}