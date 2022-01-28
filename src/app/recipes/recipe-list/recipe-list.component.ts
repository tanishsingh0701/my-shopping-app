import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected =new EventEmitter<Recipe>();
  recipes:Recipe[]=[
    new Recipe('A Test Recipe','This simply a test','https://th.bing.com/th/id/OIP.Oeet4btEd80iYyDyUPIs-gHaHa?pid=ImgDet&rs=1'),

    new Recipe('A Test Recipe','This simply a test','https://th.bing.com/th/id/OIP.Oeet4btEd80iYyDyUPIs-gHaHa?pid=ImgDet&rs=1'),
    new Recipe('A Test Recipe','This simply a test','https://th.bing.com/th/id/OIP.Oeet4btEd80iYyDyUPIs-gHaHa?pid=ImgDet&rs=1')
  ];

  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe:Recipe)
  {
    this.recipeWasSelected.emit(recipe);


  }

}
