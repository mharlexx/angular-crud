import { Component, Input } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss'],
  standalone: true, // Marking as a standalone component
  imports: [FormsModule] // Import FormsModule if you're using ngModel
})
export class ItemFormComponent {
  newItem: Item = { id: 0, name: '', description: '' };

  constructor(private itemService: ItemService) {}

  addItem(): void {
    if (this.newItem.id) {
      this.itemService.updateItem(this.newItem);
    } else {
      this.itemService.addItem(this.newItem);
    }
    this.resetForm();
  }

  resetForm(): void {
    this.newItem = { id: 0, name: '', description: '' };
  }

  // Accept the selected item for editing
  @Input() set item(item: Item | null) {
    if (item) {
      this.newItem = { ...item }; // Set the newItem to the item being edited
    } else {
      this.resetForm(); // Reset if there's no item
    } //Test
  }
}