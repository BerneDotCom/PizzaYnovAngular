import { Component } from '@angular/core';
import { PanierService} from './panier/services/panier.service';
import { Pizza } from './pizza/models/pizza';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PanierService]
})
export class AppComponent {
  title = 'app';

  constructor(private panierService: PanierService){

  }

}
