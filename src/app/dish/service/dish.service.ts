import { Injectable } from '@angular/core';
import {Dish} from '../model/dish';
import {DISHES} from '../model/dishes';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Observable<Dish[]>{
    return of(DISHES).pipe(delay(2000));
  }


  getDishById(id): Observable<Dish>{
    return of(DISHES.filter((dish) => dish.id === id)[0]).pipe(delay(2000));
   
  }
}
