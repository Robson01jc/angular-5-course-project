import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipes/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService]
})
export class AppComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
    // this.routerService.recipesClicked.subscribe(
    //   () => {
    //     this.showRecipes();
    //   }
    // );
    // this.routerService.shoppingListClicked.subscribe(
    //   () => {
    //     this.showShoppingList();
    //   }
    // );
  }

  showRecipes() {
    this.router.navigate(['/recipes']);
  }

  showShoppingList() {
    this.router.navigate(['/shopping-list']);
  }
}
