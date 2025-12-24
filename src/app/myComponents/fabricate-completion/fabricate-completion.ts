import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricateService } from '../../Services/FabricateService';
import { RouterModule,Router } from '@angular/router';
import { AuthService } from '../../Services/AuthService';

@Component({
  selector: 'app-fabricate-completion',
  imports: [CommonModule,RouterModule],
  templateUrl: './fabricate-completion.html',
  styleUrl: './fabricate-completion.css',
})
export class FabricateCompletion {
  fabricateService = inject(FabricateService);
  private router = inject(Router);

  private authService = inject(AuthService);

  logout(){
    this.authService.logout();

    this.router.navigateByUrl('/ships');
  }
}
