import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PizzaService } from '../pizza/services/pizza.service';
import { Pizza } from '../pizza/models/pizza';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-pizza-admin',
  templateUrl: './pizza-admin.component.html',
  styleUrls: ['./pizza-admin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PizzaAdminComponent implements OnInit {
  pizzaList: Pizza[];

  constructor(private pizzaService: PizzaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];

    this.pizzaService.get().subscribe(data => {
      this.pizzaList = data;
    });
  }

  /**
  * Delete the selected pizza from APP
  */
  delete(id: any){
    this.pizzaService.delete(id).subscribe(data => {
      window.location.reload();
    });
  }

}
