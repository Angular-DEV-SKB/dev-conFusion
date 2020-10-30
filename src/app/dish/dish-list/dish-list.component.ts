import { Component, OnInit } from '@angular/core';
import {Dish} from '../model/dish';
import {DISHES} from '../model/dishes';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {

  dishes: Dish[] = DISHES;

  constructor() { }

  ngOnInit(): void {
  }

}
