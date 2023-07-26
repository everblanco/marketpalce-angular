import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getProductos() {
    return this.httpClient.get("http://localhost:7788/productos");
  }

  agregarProduto(body: any) {
    return this.httpClient.post("http://localhost:7788/carritos", body);
  }

  eliminarProduto(id: number) {
    return this.httpClient.delete("http://localhost:7788/carritos/" + id);
  }

  consultarCarrito() {
    return this.httpClient.get("http://localhost:7788/carritos");
  }

  pagarCarrito(data: any){
    return this.httpClient.post("http://localhost:7788/carritos/pagar", data);
  }

  crearTarjeta(data: any){
    return this.httpClient.post("http://localhost:7788/tarjetas", data);
  }

  recargarTarjeta(data: any){
    return this.httpClient.post("http://localhost:7788/tarjetas/recargas", data);
  }

  consultarTajeta(numero: string){
    return this.httpClient.get("http://localhost:7788/tarjetas/byNumber/" + numero);
  }
}
