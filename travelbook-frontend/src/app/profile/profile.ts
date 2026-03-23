import { Component } from '@angular/core';
import { MatCardContent, MatCard, MatCardActions } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatAnchor } from '@angular/material/button';
import { LeafletModule } from '@asymmetrik/ngx-leaflet'; // 1. Importujemy moduł
import * as L from 'leaflet';

@Component({
  selector: 'app-profile',
  imports: [MatCardContent, MatCard, MatIcon, MatCardActions, MatAnchor, LeafletModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  options = {
    layers: [
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '© OpenStreetMap contributors',
      }),
    ],
    zoom: 12,
    center: L.latLng(52.2297, 21.0122),
  };

  onMapReady(map: L.Map) {
    setTimeout(() => {
      map.invalidateSize();
    }, 200);
  }
}
