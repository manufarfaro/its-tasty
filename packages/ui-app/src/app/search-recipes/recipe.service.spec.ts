import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RecipeService } from './recipe.service';
import { Recipe } from './shared/models/recipe.model';

describe('RecipeService', () => {
  let service: RecipeService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(RecipeService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getRecipes', () => {
    let expectedRecipes: Recipe[];

    beforeEach(() => {
      expectedRecipes = [
        {
          id: 0,
          title: 'Dummy Recipe',
          imageUrl: 'https://some.url',
          difficulty: 3,
          description: 'description'
        }
      ] as Recipe[];
    });

    it('should return expected recipes', () => {
      service.getRecipes().subscribe(
        recipes => expect(recipes).toEqual(expectedRecipes, 'should return expected recipes')
      );

      const request = httpTestingController.expectOne(service.recipeUrl);
      expect(request.request.method).toEqual('GET');

      request.flush(expectedRecipes);
    });
  });
});
