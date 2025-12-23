import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ship } from '../../Models/Ship';
import { Ships } from '../../Data/ShipsData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ship-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './ship-list.html',
  styleUrl: './ship-list.css',
})
export class ShipList {
  ships = signal<Ship[]>(Ships);
}
