
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import { API_ENDPOINT } from '../app.tokens';

import 'rxjs/add/operator/map';
import { Plan } from '../models/plan-model';
import { Meal } from '../models/meal-model';


interface ResponsePlan {
  name: string,
  meals?: Array<Meal>,
  _id: string
}

@Injectable()
export class PlansService {

  constructor(
    private http: HttpClient,
    @Inject(API_ENDPOINT) private apiEndpoint
  ) {}


  getPlan(id: string): Observable<Plan> {
    return this.http.get<Plan>(`${this.apiEndpoint}/plans/${id}`)
      .map(data => this._mapResponsePlan(data));
  }

  getPlans(): Observable<Array<Plan>> {
    return this.http.get<Array<ResponsePlan>>(`${this.apiEndpoint}/plans`)
      .map(data => this._mapResponsePlans(data));
  }

  updatePlan(plan: Plan): Observable<Plan> {
    return this.http.put<Plan>(`${this.apiEndpoint}/plans/${plan.id}`, plan)
      .map(data => this._mapResponsePlan(data));
  }

  private _mapResponsePlans (data): Array<Plan> {
    return data.map(plan => {
      return {
        name: plan.name,
        id: plan._id,
        meals: plan.meals
      }
    });
  }

  private _mapResponsePlan (data): Plan {
    return {
      name: data.name,
      id: data._id,
      meals: data.meals
    }
  }

}
