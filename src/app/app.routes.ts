import { RouterModule, Routes } from '@angular/router';

//Components
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaItemComponent } from './pizza-item/pizza-item.component';
import { PizzaAdminComponent } from './pizza-admin/pizza-admin.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { FormIngredientComponent } from './form-ingredient/form-ingredient.component';

//App routes
const appRoutes: Routes = [
    {path: '', component: PizzaComponent},
    {path: 'details/:id/:admin', component: PizzaItemComponent},
    {path: 'admin/pizza', component: PizzaAdminComponent},
    {path: 'ingredients', component: IngredientComponent},
    {path: 'ingredients/admin/:admin', component: IngredientComponent},
    {path: 'ingredient/add', component: FormIngredientComponent},
    {path: 'ingredient/edit/:id', component: FormIngredientComponent},
];

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(
  appRoutes,
  { enableTracing: true}
);
