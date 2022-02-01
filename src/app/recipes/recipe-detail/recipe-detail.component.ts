import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingrdient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeList:Recipe;

  id:number;

  constructor(private recipeService:RecipeService,
    private route:ActivatedRoute,private router:Router
    ) { }

  ngOnInit(){
    this.route.params.subscribe(
      (params:Params) =>
      {
        this.id=+params['id'];
        this.recipeList=this.recipeService.getRecipe(this.id);
        
      } 
    );
  }

  moveToShoppingList(ingredient:Ingredient[])
  {
      this.recipeService.addIngredientsToShoppingList(this.recipeList.ingredients)

  }
  onEditRecipe()
  {
    // this.router.navigate(['edit'],{relativeTo:this.route});
    this.router.navigate(['../',this.id,'edit'],{relativeTo:this.route})


  }
}
