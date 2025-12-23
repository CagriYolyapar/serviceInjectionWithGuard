import { Injectable, signal, computed } from '@angular/core';
import { Ship } from '../Models/Ship';

//Injectable => Dependency Injection icin üretilebilir oldugunu söyler

@Injectable({ providedIn: 'root' })
export class FabricateService {
  //Gemi imal etme servişi

  //fabricatedShips => İmal edilen gemilerin listesini tutan bir signal...

  private fabricatedShips = signal<Ship[]>([]);

  fabricated = computed(() => this.fabricatedShips());
}
