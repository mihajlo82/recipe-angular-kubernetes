export interface Recipe {
  id: number;
  name: string;
  type: string; // npr. "Dessert", "Main", "Salad"
  ingredients: string[];
  instructions: string;
  imageUrl: string;
  prepTime: string;
}
