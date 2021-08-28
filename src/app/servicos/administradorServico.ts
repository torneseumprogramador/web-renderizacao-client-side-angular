import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { Administrador } from '../models/Administrador'
import { Paginacao } from '../models/paginacao'
import { LocalServico } from './localServico'

export class AdministradorServico{
  constructor(private http: HttpClient) { }

  public async todos(pagina:Number) {
    return await this.http.get<Paginacao>(`${environment.administradoresAPI}/administradores?page=${pagina}`, { headers: new HttpHeaders({authorization: `Bearer ${LocalServico.getToken()}`})}).toPromise()
  }

  public async logar(administrador:Administrador) {
    return await this.http.post<Administrador>(`${environment.administradoresAPI}/administradores/login`, administrador, { headers: new HttpHeaders({authorization: `Bearer ${LocalServico.getToken()}`})}).toPromise()
  }
}
