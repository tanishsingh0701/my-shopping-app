import { Injectable } from "@angular/core";
import {Subject} from "rxjs";
import { Ingredient } from "../shared/ingrdient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService
{
    recipeChanged=new Subject<Recipe[]>();
    /**
     *
     */
    constructor(private shoppingListService:ShoppingListService) {}
    // recipeSelected=new Subject<Recipe>();

    private recipes:Recipe[]=[
        new Recipe('Tasty Schnitzel',
        'A super tasty schnitzel- Just awesome',
        'https://th.bing.com/th/id/OIP.7fEHkrdeRZLrD-ptB6n6pgHaE7?pid=ImgDet&rs=1',
        [
            new Ingredient('Meat',1),
            new Ingredient('French Fries',20)
        ]
        ),
    
        new Recipe('Big Fat Burger',
        'What else you need to say',
        'https://th.bing.com/th/id/OIP.g2bKmKzASwWtWXftG_cH0gHaHJ?pid=ImgDet&rs=1',
        [
            new Ingredient('Meat',1),
            new Ingredient('Buns',2) 
        ]
        )
        ];

      getRecipes()
      {
          return this.recipes.slice();
      }

      getRecipe(index:number)
      {
          return this.recipes[index];
      }


      addIngredientsToShoppingList(ingredients:Ingredient[])
      {
          this.shoppingListService.addIngredients(ingredients); 

      }


      addRecipe(recipe:Recipe)
      {
          this.recipes.push(recipe);
          this.recipeChanged.next(this.recipes.slice());

      }

      updateRecipe(index:number,newRecipe:Recipe)
      {
          this.recipes[index]=newRecipe;
          this.recipeChanged.next(this.recipes.slice());

      }

      deleteRecipe(index:number)
      {
          this.recipes.splice(index,1);
          this.recipeChanged.next(this.recipes.slice());

      }




}