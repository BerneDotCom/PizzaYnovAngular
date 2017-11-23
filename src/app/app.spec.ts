import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PizzaService } from './pizza/services/pizza.service';
import { IngredientService } from './ingredient/services/ingredient.service';
import { Pizza} from './pizza/models/pizza';


describe('Service: Pizza Service', () => {
    beforeEach(() => TestBed.configureTestingModule({
      providers: [ PizzaService ]
    }));

    it('should return an array of pizza',
      inject([PizzaService], service => {
        expect(service.get()).toContain(Array<Pizza>);
      }
    ));

    it('should return a pizza',
      inject([PizzaService], service => {

        // 5a096e7ea5326658f079c8f1 : Pizza Royale
        expect(service.getById('5a096e7ea5326658f079c8f1')).toContain(Pizza);
      }
    ));
});


describe('Service: Ingredient Service', () => {
    beforeEach(() => TestBed.configureTestingModule({
      providers: [ IngredientService ]
    }));

    it('should return an array of ingredient',
      inject([IngredientService], service => {
        expect(service.get()).toContain(Array<Ingredient>);
      }
    ));

    it('should return an ingredient',
      inject([IngredientService], service => {

        // 5a096ed4a5326658f079c8f2 : Jambon
        expect(service.getById('5a096ed4a5326658f079c8f2')).toContain(Pizza);
      }
    ));
});
