import { Component } from '@angular/core';
import { Item } from './models/item.model'; // Adjust path as necessary
import { ItemFormComponent } from './components/item-form/item-form.component';
import { ItemListComponent } from './components/item-list/item-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true, // Ensure this is set for standalone component
  imports: [ItemFormComponent, ItemListComponent] // Importing the standalone components
})
export class AppComponent {
  selectedItem: Item | null = null; // Store the currently selected item

  // This method will be called when an item is to be edited
  onEditItem(item: Item): void {
    this.selectedItem = item; // Set the selected item for editing
  }
}
