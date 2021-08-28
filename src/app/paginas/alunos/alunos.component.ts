import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paginacao } from 'src/app/models/paginacao';
import { Aluno } from 'src/app/models/aluno';
import { AlunoServico } from 'src/app/servicos/alunoServico';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router:Router
    ) { }

  public paginacao:Paginacao
  public pagina:number = 1

  ngOnInit(): void {
    if(this.route.snapshot.queryParams.pagina) this.pagina = this.route.snapshot.queryParams.pagina
    this.carregarAlunos(this.pagina)
  }

  private async carregarAlunos(page:number = 1){
    try{
      this.paginacao = await new AlunoServico(this.http).todos(page)
    }
    catch(e){
      if(e.statusText === "Unauthorized"){
        this.router.navigateByUrl("/login")
      }
    }
  }

  public async excluir(adm:Aluno){
    throw "Médoto ainda será implementado"
  }

  public proximaPagina(){
    this.pagina += 1
    this.carregarAlunos(this.pagina)
  }
  public paginaAnterior(){
    this.pagina -= 1
    this.carregarAlunos(this.pagina)
  }
}
