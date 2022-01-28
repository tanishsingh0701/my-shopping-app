import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingrdient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeList:Recipe;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
  }

  moveToShoppingList(ingredient:Ingredient[])
  {
    ingredient.forEach(element => {

      this.shoppingListService.addIngredient(element);
      
    });


  }
}
