import { Injectable } from '@angular/core';
import {ProductoRepor} from "../modelo/ProductoRepor";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Categoria} from "../modelo/Categoria";
import {BehaviorSubject} from "rxjs";
import {Marca} from "../modelo/Marca";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private url:string = `${environment.HOST}/categorias`;
  private categoriaSubject = new BehaviorSubject<Categoria[]>([]); // Comportamiento inicial
  marcas$ = this.categoriaSubject.asObservable(); // Observable para suscribirse
  constructor(private http: HttpClient) { }

  findAll():void{
    this.http.get<Categoria[]>(this.url).subscribe(data=>{
      this.categoriaSubject.next(data);
    });
  }
}
