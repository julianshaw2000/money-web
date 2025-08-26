
import { Routes } from '@angular/router';
import { IMPACT_ROUTES } from './features/impact/impact.routes';
import { DONATE_ROUTES } from './features/donate/donate.routes';
import { DonatehomeComponent } from './features/donatehome/donatehome.component';

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

  { path: '', component: DonatehomeComponent },

  // Optionally, add a wildcard route for 404s
  // { path: '**', redirectTo: '' },
];
