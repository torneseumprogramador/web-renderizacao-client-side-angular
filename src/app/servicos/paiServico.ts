import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { Pai } from '../models/pai'
import { LocalServico } from './localServico'

export class PaiServico{
  constructor(private http: HttpClient) { }

  public async todos(pagina:Number) {
    return await this.http.get<Pai[]>(`${environment.paisAPI}/pais?page=${pagina}`, { headers: new HttpHeaders({authorization: `Bearer ${LocalServico.getToken()}`})}).toPromise()
  }
}
