import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { HeaderComponent } from './compartilhado/header/header.component';
import { SidebarComponent } from './compartilhado/sidebar/sidebar.component';
import { FooterComponent } from './compartilhado/footer/footer.component';
import { AdministradoresComponent } from './paginas/administradores/administradores.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './paginas/login/login.component';
import { FormsModule } from '@angular/forms';
import { AlunosComponent } from './paginas/alunos/alunos.component';
import { MateriasComponent } from './paginas/materias/materias.component';
import { PaisComponent } from './paginas/pais/pais.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AdministradoresComponent,
    LoginComponent,
    AlunosComponent,
    MateriasComponent,
    PaisComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
