import { Component } from '@angular/core';
import { CameraService } from '../services/camera.service';
import { GeolocationService } from '../services/geolocation.service';
import { DeviceService } from '../services/device.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, CommonModule]
})
export class HomePage {
  foto: string | null = null;
  ubicacion: any = null;
  infoDispositivo: any = null;
  error: string | null = null;

  constructor(
    private cameraService: CameraService,
    private geolocationService: GeolocationService,
    private deviceService: DeviceService
  ) {}

  async tomarFoto() {
    try {
      this.foto = await this.cameraService.tomarFoto();
      this.error = null;
    } catch (err) {
      this.error = 'Error al tomar la foto';
      console.error(err);
    }
  }

  async obtenerUbicacion() {
    try {
      const posicion = await this.geolocationService.obtenerUbicacionActual();
      this.ubicacion = {
        latitud: posicion.coords.latitude,
        longitud: posicion.coords.longitude,
        precision: posicion.coords.accuracy
      };
      this.error = null;
    } catch (err) {
      this.error = 'Error al obtener ubicación';
      console.error(err);
    }
  }

  async obtenerInfoDispositivo() {
    try {
      this.infoDispositivo = await this.deviceService.obtenerInformacionDispositivo();
      this.error = null;
    } catch (err) {
      this.error = 'Error al obtener info del dispositivo';
      console.error(err);
    }
  }
}
