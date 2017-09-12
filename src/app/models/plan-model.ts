import { Meal } from './meal-model';

export interface Plan {
  name: string,
  meals?: Array<Meal>,
  id: string
}
