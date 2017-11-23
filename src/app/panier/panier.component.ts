import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PanierService } from './services/panier.service';
import { Pizza } from '../pizza/models/pizza';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PanierComponent implements OnInit {
  montantTotal: any;
  panier: Pizza[];
  constructor(private panierService: PanierService) { }

  ngOnInit() {
    this.montantTotal = 0;

    this.panier = this.panierService.get();

    for(let i = 0; i < this.panier.length; i++){
      console.log(this.panier[i].price);
      this.montantTotal = this.montantTotal + this.panier[i].price;
    }

  }

}
