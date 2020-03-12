import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Recipe } from './shared/models/recipe.model';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeUrl = 'http://localhost:3000/recipes';

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipeUrl);
  }
}
