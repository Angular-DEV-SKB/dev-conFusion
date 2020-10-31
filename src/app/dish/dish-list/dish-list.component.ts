import { Component, OnInit } from '@angular/core';
import {Dish} from '../model/dish';
import {DISHES} from '../model/dishes';
import {DishService} from '../service/dish.service';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {

  dishes: Dish[];
  selectedDish: Dish;

  constructor(private dishService: DishService) { }

  ngOnInit(): void {
    this.dishes = this.dishService.getDishes();
  }

  onDishClick(dish: Dish){
    this.selectedDish = dish;
  }

}
