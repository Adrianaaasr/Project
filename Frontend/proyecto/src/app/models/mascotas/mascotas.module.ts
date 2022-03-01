
export class MascotasModule {

  nombre: string;
  raza: string;
  edad: number;
  vacunas: boolean;

  constructor (nombre: string, raza: string, edad: number, vacunas: boolean) {
    this.nombre=nombre;
    this.raza=raza;
    this.edad=edad;
    this.vacunas=vacunas;
  }
 }
