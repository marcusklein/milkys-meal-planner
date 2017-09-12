import { Recipe } from './recipe-model';

export interface Meal {
  name: string,
  recipes?: Array<Recipe>,
  time: string,
  order: number
}
