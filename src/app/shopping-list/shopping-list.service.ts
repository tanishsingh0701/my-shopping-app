import { Component,OnInit, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingrdient.model';
export class ShoppingListService
{
    private ingredients:Ingredient[]=[
        new Ingredient("Apples",5),
        new Ingredient("Tomatoes",10),
        new Ingredient("Banana",15)
      ];

      
    ingrediantAddition=new EventEmitter<Ingredient[]>();
    
    getIngredients()
    {
        return this.ingredients.slice();
    }

    addIngredient(ingredient:Ingredient)
    {
        this.ingredients.push(ingredient);
        this.ingrediantAddition.emit(this.ingredients.slice());
    }

    addIngredients(ingredients:Ingredient[])
    {
        // for(let ingredient of ingredients)
        // {
        //     this.addIngredient(ingredient);
        // }

        this.ingredients.push(...ingredients);
        this.ingrediantAddition.emit(this.ingredients.slice());

    }
}