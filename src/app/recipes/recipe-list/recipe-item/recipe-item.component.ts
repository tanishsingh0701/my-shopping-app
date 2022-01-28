import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe:Recipe;
  // @Output() recipeItemSelected=new EventEmitter<void>();

  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
  }

  onItemCicked()
  {
    this.recipeService.recipeSelected.emit(this.recipe);
    // this.recipeItemSelected.emit();
  }

}
