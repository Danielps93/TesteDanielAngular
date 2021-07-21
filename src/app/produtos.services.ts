import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './Produto';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {

  API_Server_Listar = "https://localhost:44339/produtos/lista";
  API_Server_Incluir = "https://localhost:44339/produtos/inserir";  
  constructor(private http: HttpClient) {}

  Listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.API_Server_Listar);
  }

  IncluirProduto(prod: Produto): Observable<any> {
    return this.http.post<Produto>(this.API_Server_Incluir, prod, httpOptions);
  }
}
