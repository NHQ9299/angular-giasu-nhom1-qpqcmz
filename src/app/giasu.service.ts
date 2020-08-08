import { Injectable } from "@angular/core";
import { Giasu } from "./Giasu";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { from } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class GiasuService {
  // products = data;
  api = "https://5e7cbc48a917d70016683c06.mockapi.io/giasu";
  constructor(private http: HttpClient) {}

  addProduct(product): Observable<Giasu> {
    return this.http.post<Giasu>(`${this.api}`, product);
  }

  getGiasus(): Observable<Giasu[]>{
    return this.http.get<Giasu[]>(this.api);
  }

}
