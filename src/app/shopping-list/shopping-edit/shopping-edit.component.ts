import { Component, ElementRef, OnInit, Output, ViewChild,EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingrdient.model';
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

 
  @ViewChild('ingredientName') ingredientsName:ElementRef;
  @ViewChild('ingredientAmount') ingredientsAmount:ElementRef;
  // @Output() ingrediantAddition=new EventEmitter<Ingredient>(); 

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(){
  }

  onAdd()
  {
    const newIngredient=new Ingredient(this.ingredientsName.nativeElement.value,this.ingredientsAmount.nativeElement.value);
    // this.ingrediantAddition.emit(newIngredient);
    // this.shoppingListService.ingrediantAddition.emit(newIngredient)
    this.shoppingListService.addIngredient(newIngredient);
  }

}
