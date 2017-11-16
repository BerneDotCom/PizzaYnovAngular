import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ingredient } from '../models/ingredient';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class IngredientService {
  private url = "https://pizza-bernedotcom.c9users.io/ingredient/";

  constructor(public http: HttpClient) { }

  /**
  * Get all ingredients
  */
  get()/*: Observable<Ingredient[]> */{
    return this.http.get<Ingredient[]>(this.url);
  }

  /**
  * Get an ingredient by Id
  */
  getById(id): Observable<Ingredient> {
    return this.http.get<Ingredient>(this.url + id);
  }

  /**
  * Delete a ingredient by id
  */
  delete(id){
    return this.http.delete(this.url + id);
  }

  /**
  * Update a ingredient
  */
  update(ingredient: Ingredient){
    return this.http.put(this.url + ingredient._id, ingredient);
  }

  /**
  * Create a new ingredient
  */
  create(ingredient: Ingredient){
    return this.http.post(this.url, ingredient);
  }

}
