import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number;
  editMode=false;
  recipeForm:FormGroup;

  constructor(private route:ActivatedRoute,private recipeService:RecipeService,private router:Router) { }

  ngOnInit()
  {
    this.route.params.subscribe(
      (params:Params) => 
      {
        this.id=+params['id'];
        this.editMode=params['id'] != null;
        this.initForm();
      }
    );
  }

  onSubmit()
  {
    // console.log(this.recipeForm);

    // const newRecipe=new Recipe(
    //   this.recipeForm.valid['name'],
    //   this.recipeForm.valid['description'],
    //   this.recipeForm.valid['imagePath'],
    //   this.recipeForm.valid['ingredients']
    // );

    if(this.editMode){
      this.recipeService.updateRecipe(this.id,this.recipeForm.value);
    }

    else
    {
      this.recipeService.addRecipe(this.recipeForm.value);
    }



  }

  onDeleteIngredient(index:number)
  {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onCancel()
  {
    this.router.navigate(['../'],{relativeTo:this.route});

  }

  private initForm()
  {
    let reciepName='';
    let recipeImagePath='';
    let recipeDescription='';
    let recipeIngredients=new FormArray([]);

    if(this.editMode)
    {
      const recipe=this.recipeService.getRecipe(this.id);
      reciepName=recipe.name;
      recipeImagePath=recipe.imagePath;
      recipeDescription=recipe.description;

      if(recipe['ingredients'])
      {
        for(let ingredient of recipe.ingredients)
        {
          recipeIngredients.push(new FormGroup(
            {
              'name':new FormControl(ingredient.name,Validators.required),
              'amount':new FormControl(ingredient.amount,[
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            }));
        }
      }
    }
    this.recipeForm=new FormGroup(
      {
        'name':new FormControl(reciepName,Validators.required),
        'imagePath':new FormControl(recipeImagePath,Validators.required),
        'description':new FormControl(recipeDescription,Validators.required),
        'ingredients':recipeIngredients

      });

  }

  get controls() { // a getter!
    // console.log("reached");
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }


  onAddIngredient()
  {
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup(
      {
        'name':new FormControl(null,Validators.required),
        'amount':new FormControl(null,
          [
            Validators.required,
            Validators.pattern(/^[1-9]+[0-9]*$/)
          ]
          )
      }))
  }
}
