import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AulasLecionadas } from '../models/aulasLecionadas';

@Injectable({
  providedIn: 'root'
})
export class AulasLecionadasService {

  baseUrl: String = environment.baseUrl;

  constructor(
    private http : HttpClient,
    private snack : MatSnackBar ) {}

    findAll():Observable<AulasLecionadas[]> {
      const url = this.baseUrl + "/aulasLecionadas"
      return this.http.get<AulasLecionadas[]>(url);
    }

    /** MÉTODO DE BUSCAR UM Aluno PELO ID. ELE PREENCHE OS CAMPOS DO FORMULARIO PARAARIO NÃO 
   * PRECISAR DIGITAR NA HORA DE ATUALIZAR OS DADOS DO CLIENTE*/
  findById(id: any): Observable<AulasLecionadas> {
    const url = this.baseUrl + "/aulasLecionadas/" + id;
    return this.http.get<AulasLecionadas>(url);
  }

   /** MÉTODO PARA CRIAR UM NOVO CLIENTE*/
   create(aulasLecionadas: AulasLecionadas): Observable<AulasLecionadas> {
    const url = this.baseUrl + "/aulasLecionadas";
    return this.http.post<AulasLecionadas>(url, aulasLecionadas);
  }

  /** MÉTODO DE ATUALIZAR CLIENTE */
  update(aulasLecionadas: AulasLecionadas): Observable<AulasLecionadas> {
    const url = this.baseUrl + "/aulasLecionadas/" + aulasLecionadas.id;
    return this.http.put<AulasLecionadas>(url, aulasLecionadas);
  }

   /** MÉTODO DE DELETAR CLIENTE */
   delete(id : any):Observable<void> {
    const url = this.baseUrl + "/aulasLecionadas/" + id;
    return this.http.delete<void>(url);
  }


  message(msg: String): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })

}
}