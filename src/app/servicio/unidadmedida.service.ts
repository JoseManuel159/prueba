import { Injectable } from '@angular/core';
import {ProductoRepor} from "../modelo/ProductoRepor";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Categoria} from "../modelo/Categoria";
import {BehaviorSubject} from "rxjs";
import {Marca} from "../modelo/Marca";
import {UnidadMedida} from "../modelo/UnidadMedida";

@Injectable({
  providedIn: 'root'
})
export class UnidadmedidaService {
  private url:string = `${environment.HOST}/unidadmedida`;

  private unidadmedidaSubject = new BehaviorSubject<UnidadMedida[]>([]); // Comportamiento inicial
  marcas$ = this.unidadmedidaSubject.asObservable(); // Observable para suscribirse
  constructor(private http: HttpClient) { }

  findAll():void{
    this.http.get<UnidadMedida[]>(this.url).subscribe(data=>{
      this.unidadmedidaSubject.next(data);
    });
  }
}
