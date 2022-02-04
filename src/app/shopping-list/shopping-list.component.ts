import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingrdient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingredients:Ingredient[];
  private igChangeSub:Subscription;

  constructor(private shoppingListService:ShoppingListService) { }
  ngOnDestroy(): void {
   
    this.igChangeSub.unsubscribe();
  }

  ngOnInit()
  {
    

    this.ingredients=this.shoppingListService.getIngredients();
    this.igChangeSub=this.shoppingListService.ingrediantAddition.subscribe(
      (ingredientList:Ingredient[]) => 
      {
        this.ingredients=ingredientList;
      }
    );

  }

  onEditItem(index:number)
  {
    this.shoppingListService.startedEditing.next(index);

  }

  // onIngredientReceived(ingredientObj)
  // {
  //   console.log(ingredientObj);
  //   this.ingredients.push(ingredientObj);
  // }

}
