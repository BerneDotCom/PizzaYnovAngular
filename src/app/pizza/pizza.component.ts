import { Component, OnInit, ViewEncapsulation, Pipe, PipeTransform } from '@angular/core';
import { Pizza } from './models/pizza';
import { PizzaService } from './services/pizza.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [PizzaService]
})
export class PizzaComponent implements OnInit {

  pizzaList: Pizza[];
  public sliderValue: Number;

  constructor(private pizzaService: PizzaService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.pizzaService.get().subscribe(data => {
      this.pizzaList = data;
    });

    this.sliderValue = 40;
  }
}
