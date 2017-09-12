export interface Food {
  name: string,
  macros: Macro
  quantity: string
}

export interface Macro {
  protein: number,
  carbs: number,
  fats: number,
  sodium?: number
}
