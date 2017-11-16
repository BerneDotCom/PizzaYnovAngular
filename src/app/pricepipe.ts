import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'PricePipe'})
export class PricePipe implements PipeTransform {
  transform(value,args?) {
    let maxPrice = args;
    return value.filter(pizza => {
      return pizza.price <= maxPrice;
    });
  }
}
