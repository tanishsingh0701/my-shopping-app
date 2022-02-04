import { Component,OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import { Ingredient } from 'src/app/shared/ingrdient.model';
export class ShoppingListService
{
    private ingredients:Ingredient[]=[
        new Ingredient("Apples",5),
        new Ingredient("Tomatoes",10),
        new Ingredient("Banana",15)
      ];

      
    ingrediantAddition=new Subject<Ingredient[]>();
    startedEditing=new Subject<number>();
    
    getIngredients()
    {
        return this.ingredients.slice();
    }

    getIngredient(index:number)
    {
        return this.ingredients[index];
    }

    addIngredient(ingredient:Ingredient)
    {
        this.ingredients.push(ingredient);
        this.ingrediantAddition.next(this.ingredients.slice());
    }

    addIngredients(ingredients:Ingredient[])
    {
        // for(let ingredient of ingredients)
        // {
        //     this.addIngredient(ingredient);
        // }

        this.ingredients.push(...ingredients);
        this.ingrediantAddition.next(this.ingredients.slice());

    }

    updateIngredient(index:number,newIngredient:Ingredient)
    {
        this.ingredients[index]=newIngredient;
        this.ingrediantAddition.next(this.ingredients.slice());
    }

    deleteIngredient(index:number)
    {
        this.ingredients.splice(index,1);
        this.ingrediantAddition.next(this.ingredients.slice());
    }
}