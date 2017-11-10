import { RouterModule, Routes } from '@angular/router';
import { PizzaComponent } from './pizza/pizza.component';
import { BucketComponent } from './bucket/bucket.component';
import { PizzaItemComponent } from './pizza-item/pizza-item.component';
import { PizzaAdminComponent } from './pizza-admin/pizza-admin.component';


const appRoutes: Routes = [
    {path: '', component: PizzaComponent},
    {path: 'details/:id/:admin', component: PizzaItemComponent},
    {path: 'addBucket/:id', component: BucketComponent},
    {path: 'admin/pizza', component: PizzaAdminComponent},
];

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(
  appRoutes,
  { enableTracing: true}
);
