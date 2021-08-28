import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pai } from '../../models/pai';
import { PaiServico } from '../../servicos/paiServico';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router:Router
    ) { }

  public pais:Pai[]
  public pagina:number = 1

  ngOnInit(): void {
    if(this.route.snapshot.queryParams.pagina) this.pagina = this.route.snapshot.queryParams.pagina
    this.carregarPais(this.pagina)
  }

  private async carregarPais(page:number = 1){
    try{
      this.pais = await new PaiServico(this.http).todos(page)
    }
    catch(e){
      if(e.statusText === "Unauthorized"){
        this.router.navigateByUrl("/login")
      }
    }
  }

  public async excluir(adm:Pai){
    throw "Médoto ainda será implementado"
  }

  public proximaPagina(){
    this.pagina += 1
    this.carregarPais(this.pagina)
  }
  public paginaAnterior(){
    this.pagina -= 1
    this.carregarPais(this.pagina)
  }
}
