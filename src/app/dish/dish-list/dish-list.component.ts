import { Component, OnInit } from '@angular/core';
import {Dish} from '../model/dish';
import {DISHES} from '../model/dishes';
import {DishService} from '../service/dish.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {

  dishes: Dish[];
  selectedDish: Dish;

  constructor(private dishService: DishService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dishes = this.dishService.getDishes();
  }

  onDishClick(dish: Dish){
    this.selectedDish = dish;
    this.router.navigate(["../dishDetails/" + dish.id], {relativeTo: this.route});
  }

}
