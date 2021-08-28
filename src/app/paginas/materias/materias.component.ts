import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paginacao } from 'src/app/models/paginacao';
import { MaterialServico } from 'src/app/servicos/materialServico';
import { Material } from 'src/app/models/material';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router:Router
    ) { }

  public paginacao:Paginacao
  public pagina:number = 1

  ngOnInit(): void {
    if(this.route.snapshot.queryParams.pagina) this.pagina = this.route.snapshot.queryParams.pagina
    this.carregarMateriais(this.pagina)
  }

  private async carregarMateriais(page:number = 1){
    try{
      this.paginacao = await new MaterialServico(this.http).todos(page)
    }
    catch(e){
      if(e.statusText === "Unauthorized"){
        this.router.navigateByUrl("/login")
      }
    }
  }

  public async excluir(adm:Material){
    throw "Médoto ainda será implementado"
  }

  public proximaPagina(){
    this.pagina += 1
    this.carregarMateriais(this.pagina)
  }
  public paginaAnterior(){
    this.pagina -= 1
    this.carregarMateriais(this.pagina)
  }
}
