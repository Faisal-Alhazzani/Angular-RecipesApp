import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  choosenRecipe: Recipe;
  constructor(private slService: ShoppingListService, 
    private rService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }
    id: number;
  ngOnInit() {
    this.route.params.subscribe(
      (parms: Params)=> {
        this.id = +parms.id;
        this.choosenRecipe = this.rService.getRecipe(this.id);
      }
    )
  }
  AddToShoppingList(){
    this.choosenRecipe.ingredients.forEach(ingredient => {
      this.slService.AddToList(ingredient)
    });
  }
  onEdit(){
    this.router.navigate(["edit"], {relativeTo:this.route})
  }
}