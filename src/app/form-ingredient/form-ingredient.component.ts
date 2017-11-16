import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IngredientService } from '../ingredient/services/ingredient.service';
import { Ingredient } from '../ingredient/models/ingredient';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-form-ingredient',
  templateUrl: './form-ingredient.component.html',
  styleUrls: ['./form-ingredient.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [IngredientService]
})

export class FormIngredientComponent implements OnInit {
  form: FormGroup;
  ingredient: Ingredient;

  constructor(private ingredientService: IngredientService, public route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    /**
    * Initialise form
    */
    this.form = new FormGroup({
      name: new FormControl('', Validators.minLength(3)),
      weight: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required)
    });
  }

/**
* When the form is submitted, call the API to create a new ingredient
*/
  onSubmit(){
    this.ingredient = this.form.value;
    this.ingredientService.create(this.ingredient).subscribe(data => {
      this.router.navigateByUrl('ingredients');
    });
  }
}
