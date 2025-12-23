import { Injectable, signal, computed } from '@angular/core';
import { Ship } from '../Models/Ship';

//Injectable => Dependency Injection icin üretilebilir oldugunu söyler

@Injectable({ providedIn: 'root' })
export class FabricateService {
  //Gemi imal etme servişi

  //fabricatedShips => İmal edilen gemilerin listesini tutan bir signal...

  private fabricatedShips = signal<Ship[]>([]);

  fabricated = computed(() => this.fabricatedShips());

  //Aynı gemi iki kere imal edilemesin...Component'ta degil service'ta yapmak gerekir...Business rule responsibility

  fabricate(ship: Ship): boolean {
    const already = this.fabricatedShips().some((s) => s.id === ship.id || s.name === ship.name);
    if (already) return false;

    this.fabricatedShips.update((list) => [...list, ship]);
    return true;
  }

  //Yok etmek

  decommissionShip(shipId: number): void {
    this.fabricatedShips.update((list) => list.filter((s) => s.id !== shipId));
  }

  //imal edilen gemi sayısını
  count = computed(() => this.fabricatedShips().length);
}
