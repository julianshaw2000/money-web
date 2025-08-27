
import { Routes } from '@angular/router';
import { DonatehomeComponent } from './features/donatehome/donatehome.component';
import { PaymentComponent } from './features/payment/payment.component';
import { ImpactComponent } from './features/impact/impact.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./features/impact/impact.routes').then(m => m.IMPACT_ROUTES),
  //   pathMatch: 'full',
  // },
  {
    path: 'donate',
    loadChildren: () => import('./features/donate/donate.routes').then(m => m.DONATE_ROUTES),
  },

  { path: 'payment', component: PaymentComponent },
  { path: 'impact', component: ImpactComponent },
  { path: '', component: DonatehomeComponent },

  // Optionally, add a wildcard route for 404s
  // { path: '**', redirectTo: '' },
];
