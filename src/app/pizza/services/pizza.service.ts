import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pizza } from '../models/pizza';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class PizzaService {
  private url = "";

  constructor(public http: HttpClient) { }

  /**
  * Get all pizzas
  */
  get(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>('assets/pizza.json');
  }

  /**
  * Get a pizza by Id
  */
  getById(id): Observable<Pizza> {
    return this.http.get<Pizza>(this.url + id);
  }

  /**
  * Delete a pizza by id
  */
  delete(id){
    return this.http.delete(this.url + '/delete/'+ id);
  }

  /**
  * Update a pizza
  */
  update(pizza: Pizza){
    return this.http.put(this.url, pizza);
  }

  /**
  * Create a new pizza
  */
  create(pizza: Pizza){
    return this.http.post(this.url, pizza);
  }

}
