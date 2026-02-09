import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },          // default route
  { path: 'recipe/:id', component: RecipeDetailComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // fallback
];
