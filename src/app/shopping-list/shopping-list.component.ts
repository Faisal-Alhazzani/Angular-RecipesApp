import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private ChangeSub: Subscription;

  constructor(private shoppingService: ShoppingListService) { }
  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
    this.ChangeSub = this.shoppingService.ingredientChanged.subscribe(
      () => {this.ingredients = this.shoppingService.getIngredients()}
    )
  }
  ngOnDestroy(): void {
    this.ChangeSub.unsubscribe();
  }
}