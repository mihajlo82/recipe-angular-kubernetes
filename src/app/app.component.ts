import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { FilterBarComponent } from "./components/filter-bar/filter-bar.component";
// import { RecipeCardComponent } from "./components/recipe-card/recipe-card.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
})
export class AppComponent {
  title = 'recipe-app-client';
}
