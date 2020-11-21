import { Injectable } from '@angular/core';
import {Dish} from '../model/dish';
import {DISHES} from '../model/dishes';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../../base-url';
import { map, catchError } from 'rxjs/operators';
import { HttpErrorService } from '../../shared/http-error.service';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient,
    private processHttpErrorService: HttpErrorService) { }

  getDishes(): Observable<Dish[]>{
    return this.http.get<Dish[]>(baseURL + 'dishess').pipe(catchError(this.processHttpErrorService.handleError));
  }


  getDishById(id): Observable<Dish>{
    return this.http.get<Dish>(baseURL + "dishes/" + id);
  }
}
