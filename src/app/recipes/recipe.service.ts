import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {
    private recipes: Recipe[] =
        [
            new Recipe
                (
                    'Tasty Beef Burger',
                    'American delecious burger!!',
                    'https://www.thedorsetmeatcompany.co.uk/theme-content/uploads/2018/05/kIVLTxgo.jpeg',
                    [
                        new Ingredient('Meat', 1),
                        new Ingredient('French Fries', 21)
                    ]
                ),
            new Recipe
                (
                    'Italian Spaghetti',
                    'The real spaghetti on the Italian way!',
                    'https://a7m3f5i5.rocketcdn.me/wp-content/uploads/2015/09/moms-spaghetti-sauce-recipe-a-healthy-slice-of-life-6-of-6-800x600.jpg',
                    [
                        new Ingredient('Spaghetti', 4),
                        new Ingredient('Tomatoes', 2)
                    ]
                )
        ];

    getRecipes() {
        return this.recipes.slice();
    }
    getRecipe(index:number){
        return this.recipes[index];
    }
}