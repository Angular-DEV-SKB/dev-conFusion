import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishListComponent } from './dish-list/dish-list.component';
import { DishRoutingModule } from './dish-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import {DishService} from './service/dish.service';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [DishListComponent, DishDetailComponent],
  imports: [
    RouterModule,
    CommonModule,
    DishRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  providers:[
    DishService
  ]
})
export class DishModule { }
