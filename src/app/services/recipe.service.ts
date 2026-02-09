import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    {
      id: 1,
      name: 'Chocolate Cake',
      type: 'Dessert',
      ingredients: ['Flour', 'Sugar', 'Cocoa', 'Eggs'],
      instructions: 'Mix ingredients and bake for 30 minutes.',
      imageUrl:
        'https://cdn.jwplayer.com/v2/media/W4yH8741/thumbnails/8Mhboqg7.jpg?width=1280',
      prepTime: '45 min',
    },
    {
      id: 2,
      name: 'Caesar Salad',
      type: 'Salad',
      ingredients: ['Lettuce', 'Croutons', 'Parmesan', 'Caesar dressing'],
      instructions: 'Mix ingredients and serve cold.',
      imageUrl:
        'https://cdn.loveandlemons.com/wp-content/uploads/2024/12/caesar-salad.jpg',
      prepTime: '15 min',
    },
  ];

  constructor() {}

  getRecipes(): Recipe[] {
    return this.recipes;
  }

  getRecipeById(id: number): Recipe | undefined {
    return this.recipes.find((r) => r.id === id);
  }

  filterByType(type: string): Recipe[] {
    if (type === 'All') return this.recipes;
    return this.recipes.filter((r) => r.type === type);
  }

  searchByName(query: string): Recipe[] {
    return this.recipes.filter((r) =>
      r.name.toLowerCase().includes(query.toLowerCase()),
    );
  }
}
