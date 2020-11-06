import { Injectable } from '@angular/core';
import {Dish} from '../model/dish';
import {DISHES} from '../model/dishes';


@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Dish[]{
    return DISHES;
  }


  getDishById(id): Dish{
    return DISHES.filter((dish) => dish.id === id)[0];
  }
}
