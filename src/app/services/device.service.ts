import { Injectable } from '@angular/core';
import { Device, DeviceInfo } from '@capacitor/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  async obtenerInformacionDispositivo(): Promise<DeviceInfo> {
    return await Device.getInfo();
  }

  async obtenerIdDispositivo(): Promise<string> {
    const { identifier } = await Device.getId();
    return identifier;
  }

  async obtenerInfoBateria(): Promise<{ batteryLevel: number, isCharging: boolean }> {
    const info = await Device.getBatteryInfo();
    return {
      batteryLevel: info.batteryLevel || 0,
      isCharging: info.isCharging || false
    };
  }

  async verificarPlataforma(): Promise<'ios' | 'android' | 'web'> {
    const { platform } = await Device.getInfo();
    return platform as 'ios' | 'android' | 'web';
  }
}
