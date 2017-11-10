import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Pizza } from '../pizza/models/pizza';
import { ActivatedRoute} from '@angular/router';
import { PizzaService } from '../pizza/services/pizza.service';

@Component({
  selector: 'app-pizza-item',
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [PizzaService]
})
export class PizzaItemComponent implements OnInit {
  pizza: Pizza;
  constructor(private route: ActivatedRoute, private pizzaService: PizzaService) { }

  ngOnInit() {
    let pizzaId = this.route.snapshot.params['id'];
    this.pizzaService.getById(pizzaId).subscribe(data => {
      this.pizza = data;
    });
  }

}
