import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {
  // @Output() recipeWasSelected =new EventEmitter<Recipe>();
  recipes:Recipe[];
  subscription:Subscription;

  constructor(private recipeService:RecipeService,private router:Router,
    private route:ActivatedRoute
    ) { }
  ngOnDestroy() {
    
  this.subscription.unsubscribe();
  }


  ngOnInit()
  {
    this.subscription=this.recipeService.recipeChanged.subscribe(
      
        (recipes:Recipe[]) =>
        {
          this.recipes=recipes;
        }

      );
    this.recipes=this.recipeService.getRecipes();

  }

  onNewRecipe()
  {
    // console.log("reached");
    this.router.navigate(['new'],{relativeTo:this.route});

  }
 

}
