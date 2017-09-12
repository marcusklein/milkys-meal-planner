
import { Routes } from '@angular/router';
import { PlanListComponent } from './core/plan-list/plan-list.component';
import { PlanDetailsComponent } from './core/plan-details/plan-details.component';

export const APP_ROUTES: Routes = [
  { path: '', component: PlanListComponent },
  { path: 'plan/:id', component: PlanDetailsComponent },
  // { path: 'plan/:id/edit', component: ContactsEditorComponent },
  // Wildcard route serves as fallback route and has to be
  // the last defined route in this list.
  { path: '**', redirectTo: '/' }
];
