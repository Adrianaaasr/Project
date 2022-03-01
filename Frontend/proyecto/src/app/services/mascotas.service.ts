import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { MascotasModule } from '../models/mascotas/mascotas.module';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {
  url='http://localhost:4000/api/pets/mascota'
  constructor(private http: HttpClient) { }
  getmascotas ():Observable <any> {
    return this.http.get(this.url);
  }
}
