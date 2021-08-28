import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalServico } from 'src/app/servicos/localServico';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  public usuarioLogado:string
  ngOnInit(): void {
    this.usuarioLogado = LocalServico.getNome()
    if(!this.usuarioLogado) this.router.navigateByUrl("/login")
  }

  public sair(){
    LocalServico.limpar()
    this.router.navigateByUrl("/login")
  }

}
