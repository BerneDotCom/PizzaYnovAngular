import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pizza } from '../../pizza/models/pizza';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class PanierService {
  private panier: any;

  constructor(public http: HttpClient) {
    this.panier = [];
  }

  /**
  * Return the bucket
  */
  get() : Pizza[]{
    return this.panier;
  }

  /**
  * Add pizza to the bucket
  */
  add(pizza: Pizza){
    this.panier.push(pizza);
  }

}
