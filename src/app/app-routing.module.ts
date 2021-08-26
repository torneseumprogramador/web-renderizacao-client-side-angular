import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministradoresComponent } from './paginas/administradores/administradores.component';
import { HomeComponent } from './paginas/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'administradores', component: AdministradoresComponent },
  //{ path: '**', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
