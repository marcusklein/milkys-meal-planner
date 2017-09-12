import { Food } from './food-model';

export interface Recipe {
  name: String,
  foods?: Array<Food>
}
