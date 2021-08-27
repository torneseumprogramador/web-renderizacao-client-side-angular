import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Paginacao } from '../models/paginacao'

export class AdministradorServico{
  constructor(private http: HttpClient) { }

  public async todos(pagina:Number) {
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkRhbmlsbyIsInJvbGUiOiJhZG1pbmlzdHJhZG9yIiwibmJmIjoxNjMwMDU3ODQ3LCJleHAiOjE2MzAwNjg2NDcsImlhdCI6MTYzMDA1Nzg0N30.KtYCV4Ze-DE54h9WzorrF6rXri3_DF0iTjz0O4I-s6I"
    return await this.http.get<Paginacao>(`https://localhost:5001/administradores?page=${pagina}`, { headers: new HttpHeaders({authorization: `Bearer ${token}`})}).toPromise()
  }
}
