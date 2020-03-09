import { Component, OnInit } from '@angular/core';
import { Recipe } from '../shared/models/recipe.model';
@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {
  recipes: Array<Recipe> = [];


  constructor() { }

  ngOnInit(): void {
    this.recipes.push(
        {
          id: 0,
          title: 'Stuffed Tomatoes with Rice',
          imageUrl: 'https://www.tasteofhome.com/wp-content/uploads/2017/10/exps24703_CW10496D31C.jpg',
          difficulty: 3,
          description: `
            Here\\'s a pretty side dish that will please everyone who tastes it.
            Stuffed with brown or white rice, these tomatoes can be prepared ahead and baked hours
            later-so they\\'re perfect for a busy hostess.
          `
        }
      );
  }

}
