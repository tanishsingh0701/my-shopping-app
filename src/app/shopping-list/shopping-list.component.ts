import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingrdient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[]=[
    new Ingredient("Apples",5),
    new Ingredient("Tomatoes",10),
    new Ingredient("Banana",15)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientReceived(ingredientObj)
  {
    console.log(ingredientObj);
    this.ingredients.push(ingredientObj);
  }

}
