import { Component, OnInit } from '@angular/core';
import { MascotasModule } from 'src/app/models/mascotas/mascotas.module';
import { MascotasService } from 'src/app/services/mascotas.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent implements OnInit {

  listamascotas:MascotasModule[]=[];

  constructor(private _MascotasService:MascotasService) { }


  ngOnInit(): void {
    this.vermascota ();
  }
  vermascota () {
    console.log("Hola");
  }

}
