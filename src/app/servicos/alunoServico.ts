import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { Paginacao } from '../models/paginacao'
import { LocalServico } from './localServico'

export class AlunoServico{
  constructor(private http: HttpClient) { }

  public async todos(pagina:Number) {
    return await this.http.get<Paginacao>(`${environment.alunosAPI}/alunos?page=${pagina}`, { headers: new HttpHeaders({authorization: `Bearer ${LocalServico.getToken()}`})}).toPromise()
  }

}
