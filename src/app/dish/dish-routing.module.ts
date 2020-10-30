import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DishListComponent } from './dish-list/dish-list.component';


const routes: Routes = [
    {
      path: 'dish-list',
      component: DishListComponent,
      data: {
        title: 'Dishes'
      }
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DishRoutingModule {}