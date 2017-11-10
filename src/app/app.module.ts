import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from "clarity-angular";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { APP_ROUTES_PROVIDER } from './app.routes';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { BucketComponent } from './bucket/bucket.component';
import { PizzaItemComponent } from './pizza-item/pizza-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    IngredientComponent,
    BucketComponent,
    PizzaItemComponent,
  ],
  imports: [
    BrowserModule,
    ClarityModule.forRoot(),
    HttpClientModule,
    APP_ROUTES_PROVIDER,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
