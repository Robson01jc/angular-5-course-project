import { Output, EventEmitter } from '@angular/core';

export class RouterService {
  @Output() recipesClicked = new EventEmitter<void>();
  @Output() shoppingListClicked  = new EventEmitter<void>();
}