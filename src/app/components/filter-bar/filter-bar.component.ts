// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-filter-bar',
//   standalone: true,
//   imports: [],
//   templateUrl: './filter-bar.component.html',
//   styleUrl: './filter-bar.component.scss'
// })
// export class FilterBarComponent {

// }
import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class FilterBarComponent {
  @Output() filter = new EventEmitter<string>();
  @Output() search = new EventEmitter<string>();

  types: string[] = ['All', 'Dessert', 'Main', 'Salad'];

  onFilter(type: string) {
    this.filter.emit(type);
  }

  onSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    this.search.emit(target.value);
  }
}
