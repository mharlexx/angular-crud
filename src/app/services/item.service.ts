import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private items: Item[] = [];
  private nextId = 1;

  getItems(): Item[] {
    return this.items;
  }

  addItem(item: Item): void {
    item.id = this.nextId;
    this.nextId++;
    this.items.push(item);
  }

  updateItem(updatedItem: Item): void {
    const index = this.items.findIndex((item) => item.id === updatedItem.id);
    if (index !== -1) {
      this.items[index] = updatedItem;
    }
  }

  deleteItem(id: number): void {
    this.items = this.items.filter((item) => item.id !== id);
  }

  getItemById(id: number): Item | undefined {
    return this.items.find((item) => item.id === id);
  }
}