import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingrdient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[];

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit()
  {
    

    this.ingredients=this.shoppingListService.getIngredients();
    this.shoppingListService.ingrediantAddition.subscribe(
      (ingredientList:Ingredient[]) => 
      {
        this.ingredients=ingredientList;
      }
    );

  }

  // onIngredientReceived(ingredientObj)
  // {
  //   console.log(ingredientObj);
  //   this.ingredients.push(ingredientObj);
  // }

}
