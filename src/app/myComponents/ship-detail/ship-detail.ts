import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, RouterLink } from '@angular/router';
import { Ships } from '../../Data/ShipsData';
import { FabricateService } from '../../Services/FabricateService';

@Component({
  selector: 'app-ship-detail',
  imports: [RouterLink],
  templateUrl: './ship-detail.html',
  styleUrl: './ship-detail.css',
})
export class ShipDetail {
  private route = inject(ActivatedRoute);
  private fabricateService = inject(FabricateService);

  message = signal<string>('');

  //Url parametresinden /ships/:id

  shipId = computed(() => Number(this.route.snapshot.paramMap.get('id')));

  ship = computed(() => {
    const id = this.shipId();
    return Ships.find((s) => s.id === id) ?? null;
  });

  onFabricate(): void {
    const s = this.ship();
    if (!s) return;

    const ok = this.fabricateService.fabricate(s);

    this.message.set(ok ? 'Gemi imal edildi' : 'Bu gemi zaten imal edilmiş');
  }
}
