import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Paginacao } from '../../models/paginacao';
import { AdministradorServico } from '../../servicos/AdministradorServico';
import { Administrador } from '../../models/Administrador';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-administradores',
  templateUrl: './administradores.component.html',
  styleUrls: ['./administradores.component.css']
})
export class AdministradoresComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
    ) { }

  public paginacao:Paginacao
  public pagina:number = 1

  ngOnInit(): void {
    if(this.route.snapshot.queryParams.pagina) this.pagina = this.route.snapshot.queryParams.pagina
    this.carregarAdministradores(this.pagina)
  }

  private async carregarAdministradores(page:number = 1){
    this.paginacao = await new AdministradorServico(this.http).todos(page)
  }

  public async excluir(adm:Administrador){
    throw "Médoto ainda será implementado"
  }

  public proximaPagina(){
    this.pagina += 1
    this.carregarAdministradores(this.pagina)
  }
  public paginaAnterior(){
    this.pagina -= 1
    this.carregarAdministradores(this.pagina)
  }

}
