import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ResultsPageComponent } from './results-page/results-page.component';



@NgModule({
  declarations: [HomeComponent, ResultsPageComponent],
  imports: [
    CommonModule
  ]
})
export class SearchRecipesModule { }
