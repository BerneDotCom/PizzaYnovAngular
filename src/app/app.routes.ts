import { RouterModule, Routes } from '@angular/router';
import { PizzaComponent } from './pizza/pizza.component';
import { BucketComponent } from './bucket/bucket.component';
import { PizzaItemComponent } from './pizza-item/pizza-item.component';


const appRoutes: Routes = [
    {path: '', component: PizzaComponent},
    {path: 'details/:id', component: PizzaItemComponent},
    {path: 'addBucket/:pizza', component: BucketComponent}
];

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(
  appRoutes,
  { enableTracing: true}
);
