import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Ingredient } from './models/ingredient';
import { IngredientService } from './services/ingredient.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [IngredientService]
})
export class IngredientComponent implements OnInit {
  ingredientList: Ingredient[];
  isAdmin: Boolean;
  constructor(private ingredientService: IngredientService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.isAdmin = this.route.snapshot.params['admin'];

    this.ingredientService.get().subscribe(data => {
      this.ingredientList = data;
    });
  }

}
