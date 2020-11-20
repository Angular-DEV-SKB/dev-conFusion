import { Injectable } from '@angular/core';
import {Dish} from '../model/dish';
import {DISHES} from '../model/dishes';


@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Promise<Dish[]>{
    return new Promise(resolve => {
      // simulate latency for 3 seconds
      setTimeout(() => resolve(DISHES), 3000);
    })
  }


  getDishById(id): Promise<Dish>{
    return new Promise((resolve) => {
      // simulate latency for 3 seconds
      setTimeout(() => resolve(DISHES.filter((dish) => dish.id === id)[0]), 3000);
    });
  }
}
