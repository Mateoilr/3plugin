import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';
import { Device } from '@capacitor/device';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, CommonModule]
})
export class HomePage {
  image: string | undefined;
  location: any;
  deviceInfo: any;

  constructor() {}

  async takePhoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });

    this.image = image.dataUrl;
  }

  async getLocation() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.location = coordinates;
  }

  async getDeviceInfo() {
    this.deviceInfo = await Device.getInfo();
  }
}
