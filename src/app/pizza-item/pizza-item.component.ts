import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Pizza } from '../pizza/models/pizza';
import { Ingredient } from '../ingredient/models/ingredient';
import { ActivatedRoute} from '@angular/router';
import { PizzaService } from '../pizza/services/pizza.service';
import { IngredientService } from '../ingredient/services/ingredient.service';


@Component({
  selector: 'app-pizza-item',
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [PizzaService, IngredientService]
})
export class PizzaItemComponent implements OnInit {
  pizza: Pizza;
  isAdmin: Boolean;
  ingredients: Array<Ingredient>;

  constructor(private route: ActivatedRoute, private pizzaService: PizzaService, private ingredientService: IngredientService) {
    this.ingredients = [];
  }

  ngOnInit() {
    //PizzaId given in URL
    let pizzaId = this.route.snapshot.params['id'];

    //If the user come from administration panel
    this.isAdmin = (this.route.snapshot.params['admin'] == 'true');

    //Retrieve the pizza from the pizzaId
    this.pizzaService.getById(pizzaId).subscribe(data => {
      this.pizza = data;

      //When pizza is retrieved, try to find all its ingredients
      for(var i = 0; i < this.pizza.ingredient_ids.length; i++){
        this.ingredientService.getById(this.pizza.ingredient_ids[i]['_id']).subscribe(ingredient => {

          //Pushing the ingredient into the list
          this.ingredients.push(ingredient);

        });
      }
    });
  }

}
