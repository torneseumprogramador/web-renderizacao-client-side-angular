import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministradoresComponent } from './paginas/administradores/administradores.component';
import { AlunosComponent } from './paginas/alunos/alunos.component';
import { HomeComponent } from './paginas/home/home.component';
import { LoginComponent } from './paginas/login/login.component';
import { MateriasComponent } from './paginas/materias/materias.component';
import { PaisComponent } from './paginas/pais/pais.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'administradores', component: AdministradoresComponent },
  { path: 'alunos', component: AlunosComponent },
  { path: 'pais', component: PaisComponent },
  { path: 'materiais', component: MateriasComponent },
  { path: 'login', component: LoginComponent },
  //{ path: '**', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
