import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' }, // Only redirect if the full path is empty. The default matching strategy is 'prefix'
  {
    path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent },
      {
        path: 'recipe-list', component: RecipeListComponent, children: [
          { path: 'recipe-item', component: RecipeItemComponent }
        ]
      }
    ]
  },
  {
    path: 'shopping-list', component: ShoppingListComponent, children: [
      { path: ':id/shopping-list-edit', component: ShoppingListEditComponent }
    ]
  }
];

// Transform this from a normal typescript class into an Angular module.
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}