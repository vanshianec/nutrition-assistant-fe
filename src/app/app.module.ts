import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MealComponent} from './core/diary/meal/meal.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from '@angular/material/table';
import {FoodTableComponent} from './core/diary/meal/content/food-table/food-table.component';
import {MatIconModule} from "@angular/material/icon";
import {DiaryComponent} from './core/diary/diary.component';
import {MatDividerModule} from "@angular/material/divider";
import {HeaderComponent} from './core/diary/header/header.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MicronutrientsComponent} from "./core/diary/micronutrients/micronutrients.component";
import {ChartModule} from "primeng/chart";

@NgModule({
  declarations: [
    AppComponent,
    MealComponent,
    FoodTableComponent,
    DiaryComponent,
    HeaderComponent,
    MicronutrientsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatDividerModule,
    MatExpansionModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
