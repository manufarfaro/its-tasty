import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ResultsPageComponent } from './results-page/results-page.component';

const recipesRoutes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [HomeComponent, ResultsPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(recipesRoutes)
  ]
})
export class SearchRecipesModule { }
