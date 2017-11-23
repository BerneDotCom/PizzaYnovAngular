import { Component, OnInit, ViewEncapsulation, Pipe, PipeTransform } from '@angular/core';
import { Pizza } from './models/pizza';
import { PizzaService } from './services/pizza.service';
import { ActivatedRoute} from '@angular/router';
import { PanierService } from '../panier/services/panier.service';


@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PizzaComponent implements OnInit {

  pizzaList: Pizza[];
  public sliderValueMin: Number;
  public sliderValueMax: Number;

  constructor(private pizzaService: PizzaService, private route: ActivatedRoute, private panierService: PanierService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.pizzaService.get().subscribe(data => {
      this.pizzaList = data;
    });

    this.sliderValueMax = 40;
    this.sliderValueMin = 0;
  }

  addToBucket(pizza: Pizza){
      this.panierService.add(pizza);
      alert('Pizza ajoutée au panier !');
  }
}
