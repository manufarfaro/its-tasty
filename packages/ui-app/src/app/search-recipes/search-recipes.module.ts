import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ResultsPageComponent } from './results-page/results-page.component';
import { HeaderComponent } from './header/header.component';
import { SearchInputComponent } from './shared/search-input/search-input.component';
import {FormsModule} from '@angular/forms';
import { CardComponent } from './shared/card/card.component';

const recipesRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes/search', component: ResultsPageComponent }
];

@NgModule({
  declarations: [HomeComponent, ResultsPageComponent, HeaderComponent, SearchInputComponent, CardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(recipesRoutes),
    FormsModule
  ]
})
export class SearchRecipesModule { }
