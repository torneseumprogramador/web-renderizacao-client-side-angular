import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Administrador } from 'src/app/models/Administrador';
import { AdministradorServico } from 'src/app/servicos/AdministradorServico';
import { LocalServico } from 'src/app/servicos/localServico';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private http:HttpClient,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  public administrador:Administrador = { id:0, nome:"", email:"", senha:"", token:"" }
  public erro:string = ""
  public login:string = "Login"

  public async logar(){
    this.login = "Carregando ..."
    try{
      let adm = await new AdministradorServico(this.http).logar(this.administrador)
      LocalServico.setToken(adm.token)
      LocalServico.setNome(adm.nome)
      this.router.navigateByUrl("/")
    }
    catch(e){
      this.erro = e.message
    }
  }

}
