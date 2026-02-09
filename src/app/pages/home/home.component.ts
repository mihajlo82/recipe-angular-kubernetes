import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';
import { FilterBarComponent } from "../../components/filter-bar/filter-bar.component";
import { RecipeCardComponent } from "../../components/recipe-card/recipe-card.component";
import { CommonModule } from '@angular/common';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [FilterBarComponent, RecipeCardComponent, CommonModule, RouterOutlet],
})
export class HomeComponent implements OnInit {
    recipes: Recipe[] = [];
  filteredRecipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
    this.filteredRecipes = this.recipes;

    console.log('Recipes loaded:', this.filteredRecipes); // debug
  }

  filterRecipes(type: string) {
    this.filteredRecipes = this.recipeService.filterByType(type);
  }

  searchRecipes(query: string) {
    this.filteredRecipes = this.recipeService.searchByName(query);
  }
}
