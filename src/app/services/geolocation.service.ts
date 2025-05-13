import { Injectable } from '@angular/core';
import { Geolocation, GeolocationPosition, PositionOptions } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  async obtenerUbicacionActual(): Promise<GeolocationPosition> {
    const opciones: PositionOptions = {
      enableHighAccuracy: true,
      timeout: 10000
    };
    return await Geolocation.getCurrentPosition(opciones);
  }

  async obtenerUbicacionEnTiempoReal(callback: (position: GeolocationPosition | null, error?: any) => void) {
    const watchId = await Geolocation.watchPosition({
      enableHighAccuracy: true
    }, callback);

    return watchId;
  }

  async detenerSeguimiento(watchId: string) {
    await Geolocation.clearWatch({ id: watchId });
  }
}
