import { PizzaComponent } from './pizza/pizza.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {path: '', component: PizzaComponent},
    {path: 'details/:id', component: PizzaComponent}
];

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(
  appRoutes,
  { enableTracing: true}
);
