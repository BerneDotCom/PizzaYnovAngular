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
      _id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.minLength(3)),
      weight: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      create_at: new FormControl(''),
      update_at: new FormControl(''),
      __v: new FormControl(''),
      pizza_ids: new FormControl('')
    });

    let ingredientId = this.route.snapshot.params['id'];
    if(ingredientId != null)
    {
      this.ingredientService.getById(ingredientId).subscribe(data => {
        this.form.setValue(data);
      });
    }
  }

  /**
  * When the form is submitted, call the API to create a new ingredient
  */
  onSubmit(){
    //Setting the ingredient with the form value
    this.ingredient = this.form.value;

    //If the ingredient id is set:  we update it
    // Else : we create it
    if(this.ingredient._id != null){
      this.ingredientService.update(this.ingredient).subscribe(data => {
        this.router.navigateByUrl('ingredients');
      });
    }
    else{
      this.ingredientService.create(this.ingredient).subscribe(data => {
        this.router.navigateByUrl('ingredients');
      });
    }
  }
}
