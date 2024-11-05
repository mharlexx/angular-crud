import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item.model';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
  standalone: true,
  imports: [CommonModule] // Include CommonModule here
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];
  @Output() editItemEvent = new EventEmitter<Item>(); // Event emitter to handle edits

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.items = this.itemService.getItems();
  }

  deleteItem(id: number): void {
    this.itemService.deleteItem(id);
    this.items = this.itemService.getItems(); // Refresh list
  }

  editItem(item: Item): void {
    this.editItemEvent.emit(item); // Emit the edit event with the selected item
  }
}
