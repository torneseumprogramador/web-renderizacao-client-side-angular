import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalServico } from 'src/app/servicos/localServico';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router:Router ) { }

  ngOnInit(): void {
  }

  public sair(){
    LocalServico.limpar()
    this.router.navigateByUrl("/login")
  }

}
