import { Injectable } from '@angular/core';
import { Giasu } from './Giasu';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
  import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GiasuService {
  // products = data;
  api = 'https://5e7cbc48a917d70016683c06.mockapi.io/giasu'
  constructor(
    private http: HttpClient
  ) { }

  listProducts(): Observable<Giasu[]> {
    return this.http.get<Giasu[]>(this.api);
    // return this.products;
  }
  ListProduc(id): Observable<Giasu>{
    return this.http.get<Giasu>(`${this.api}/${id}`);
  }
  addProducts(product): Observable<Giasu> {
    return this.http.post<Giasu>(`${this.api}`, product);
    
  }
  updateProducts(product):Observable<Giasu> {
    return this.http.put<Giasu>(`${this.api}/${product.id}`, product);
  }
  removeProducts(id):Observable<Giasu> {
    return this.http.delete<Giasu>(`${this.api}/${id}`);
    // return this.http.delete<Product>(`${this.api}/${id}`);
  }
}
