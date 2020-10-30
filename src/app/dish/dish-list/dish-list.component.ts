import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {

  dishTitle = "Mr. Dog";

  constructor() { }

  ngOnInit(): void {
  }

}
