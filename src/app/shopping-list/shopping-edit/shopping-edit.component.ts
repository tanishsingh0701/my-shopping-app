import { Component, ElementRef, OnInit, Output, ViewChild,EventEmitter, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingrdient.model';
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  @ViewChild('f') slForm:NgForm;
  subscription:Subscription
  editMode=false;
  editItemIndex:number;
  editedItem:Ingredient;

  // @Output() ingrediantAddition=new EventEmitter<Ingredient>(); 

  constructor(private shoppingListService:ShoppingListService) { }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  ngOnInit(){
    this.subscription=this.shoppingListService.startedEditing
    .subscribe(
      (index:number) => 
      {
        this.editItemIndex=index;
        this.editMode=true;
        this.editedItem=this.shoppingListService.getIngredient(index);
        this.slForm.setValue(
          {
            name:this.editedItem.name,
            amount:this.editedItem.amount
          });

      }
    );

  }

  onAdd(form:NgForm)
  {
    console.log("sadasas");
    const value=form.value;
    const newIngredient=new Ingredient(value.name,value.amount);
    // this.ingrediantAddition.emit(newIngredient);
    // this.shoppingListService.ingrediantAddition.emit(newIngredient)

    if(this.editMode)
    {
      this.shoppingListService.updateIngredient(this.editItemIndex,newIngredient)

    }
    else
    {
      this.shoppingListService.addIngredient(newIngredient);

    }
    this.editMode=false;
    form.reset();

    
  }

  onClear()
  {
    this.slForm.reset();
    this.editMode=false;
  }

  onDelete()
  {
    this.shoppingListService.deleteIngredient(this.editItemIndex);
    this.onClear();

  }

}
