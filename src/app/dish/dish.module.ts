import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishListComponent } from './dish-list/dish-list.component';
import { DishRoutingModule } from './dish-routing.module';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [DishListComponent],
  imports: [
    CommonModule,
    DishRoutingModule,
    MatCardModule
  ]
})
export class DishModule { }
