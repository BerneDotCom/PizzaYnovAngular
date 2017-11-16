import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from "clarity-angular";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { APP_ROUTES_PROVIDER } from './app.routes';
import { FormsModule } from '@angular/forms';

//App components
import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { PizzaItemComponent } from './pizza-item/pizza-item.component';
import { PizzaAdminComponent } from './pizza-admin/pizza-admin.component';
import { FormIngredientComponent } from './form-ingredient/form-ingredient.component';
import { FormPizzaComponent } from './form-pizza/form-pizza.component';
import { PricePipe } from './pricepipe';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    IngredientComponent,
    PizzaItemComponent,
    PizzaAdminComponent,
    FormIngredientComponent,
    FormPizzaComponent,
    PricePipe
  ],
  imports: [
    BrowserModule,
    ClarityModule.forRoot(),
    HttpClientModule,
    APP_ROUTES_PROVIDER,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
