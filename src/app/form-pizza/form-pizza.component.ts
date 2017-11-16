import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

import { PizzaService} from '../pizza/services/pizza.service';
import { Pizza } from '../pizza/models/pizza';
import { IngredientService} from '../ingredient/services/ingredient.service';
import { Ingredient } from '../ingredient/models/ingredient';

import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-form-pizza',
  templateUrl: './form-pizza.component.html',
  styleUrls: ['./form-pizza.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [PizzaService, IngredientService]
})

export class FormPizzaComponent implements OnInit {
  form: FormGroup;
  pizza: Pizza;
  base64textString: String;
  ingredientList: Array<Ingredient>
  constructor(private pizzaService: PizzaService, public route: ActivatedRoute, private router: Router, private ingredientService: IngredientService) { }

  ngOnInit() {
    this.ingredientService.get().subscribe(data => {
      this.ingredientList = data;
    });

    /**
    * Initialise form
    */
    this.form = new FormGroup({
      // _id: new FormControl(''),
      name: new FormControl('', Validators.minLength(3)),
      desc: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      // picture: new FormControl(''),
      // update_at: new FormControl(''),
      // create_at: new FormControl(''),
      ingredient_ids: new FormArray([new FormControl('')]),
    });

    //Id pizza from the URL
    let pizzaId = this.route.snapshot.params['id'];

    if(pizzaId != null)
    {
      this.pizzaService.getById(pizzaId).subscribe(data => {
        this.form.setValue(data);
      });
    }
  }


  /**
  * When the form is submitted, call the API to create a new pizza
  */
  onSubmit(){
    //Remove the first ingredient, because empty
    this.form.value.ingredient_ids.shift();

    //Setting the pizza with the form value
    this.pizza = this.form.value;
    this.pizza.picture = this.base64textString;
    //Remove empty ingredient :
    // this.pizza.ingredient_ids = this.form.controls.ingredient_ids.shift();

    //If the pizza id is set:  we update it
    // Else : we create it
    // if(this.pizza._id > 0){
    //   this.pizzaService.update(this.pizza).subscribe(data => {
    //     this.router.navigateByUrl('ingredients');
    //   });
    // }
    // else{
      this.pizzaService.create(this.pizza).subscribe(data => {
        this.router.navigateByUrl('/');
      });
    // }
  }

  /**
  * Handle upload image as base64 string
  */
  handleFileSelect(evt){
        var files = evt.target.files;
        var file = files[0];

      if (files && file) {
          var reader = new FileReader();
          reader.onload =this._handleReaderLoaded.bind(this);
          reader.readAsBinaryString(file);
      }
    }

    /**
    * Handle upload image as base64 string
    */
    _handleReaderLoaded(readerEvt) {
       var binaryString = readerEvt.target.result;
       this.base64textString = 'data:image/jpeg;base64,' + btoa(binaryString);
    }

  /**
  * Handling ingredient_ids for the current Pizza
  */
    onChange(id:string, isChecked: boolean) {
      const ingredientFormArray = <FormArray>this.form.controls.ingredient_ids;

      if(isChecked) {
        ingredientFormArray.push(new FormControl(id));
      } else {
        let index = ingredientFormArray.controls.findIndex(x => x.value == id)
        ingredientFormArray.removeAt(index);
      }
    }
}
