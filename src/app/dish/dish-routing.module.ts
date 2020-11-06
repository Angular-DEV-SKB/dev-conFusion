import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { DishListComponent } from './dish-list/dish-list.component';


const routes: Routes = [
    {
      path: 'dish-list',
      component: DishListComponent,
      data: {
        title: 'Dish List'
      }
    },
    {
      path: 'dishDetails/:id',
      component: DishDetailComponent,
      data: {
        title: 'Dish Detail'
      }
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DishRoutingModule {}