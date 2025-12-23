import { Routes } from '@angular/router';
import { ShipList } from './myComponents/ship-list/ship-list';
import { ShipDetail } from './myComponents/ship-detail/ship-detail';
import { FabricateCompletion } from './myComponents/fabricate-completion/fabricate-completion';
import { LoginSystem } from './myComponents/login-system/login-system';
import { authGuard } from './auth-guard';

export const routes: Routes = [
  { path: '', component: LoginSystem },
  { path: 'ships', component: ShipList },
  { path: 'ships/:id', component: ShipDetail },
  { path: 'fabricateCompletion', component: FabricateCompletion, canActivate: [authGuard] },
  { path: 'login', component: LoginSystem },
  { path: '**', component: ShipList },
];
