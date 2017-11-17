import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Ingredient } from './models/ingredient';
import { IngredientService } from './services/ingredient.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IngredientComponent implements OnInit {
  ingredientList: Ingredient[];
  isAdmin: Boolean;
  constructor(private ingredientService: IngredientService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];

    //If the user come from administration panel
    this.isAdmin = (this.route.snapshot.params['admin'] == 'true');

    this.ingredientService.get().subscribe(data => {
      this.ingredientList = data;
    });
  }

  delete(ingredientId: Number){
    this.ingredientService.delete(ingredientId).subscribe(data => {
      this.router.navigateByUrl('ingredients');
    });
  }

}
