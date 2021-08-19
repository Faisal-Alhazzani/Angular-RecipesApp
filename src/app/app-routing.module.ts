import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipeNewComponent } from "./recipes/recipe-new/recipe-new.component";
import { RecipesHomeComponent } from "./recipes/recipes-home/recipes-home.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes: Routes =[
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipesComponent, children:[
        {path:"", component: RecipesHomeComponent},
        {path:"new", component: RecipeNewComponent},
        {path:":id", component: RecipeDetailComponent},
        {path:":id/edit", component: RecipeEditComponent}
    ]},
    {path: 'shopping-list', component: ShoppingListComponent},
    ]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{
}