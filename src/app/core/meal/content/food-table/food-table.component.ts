import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

/**
 * @title Table with expandable rows
 */
@Component({
  selector: 'nu-food-table',
  templateUrl: 'food-table.component.html',
  styleUrls: ['food-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('275ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class FoodTableComponent {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['name', 'kcal', 'protein', 'carbohydrates', 'fat', 'price'];
  expandedElement: FoodElement | undefined;
}

export interface FoodElement {
  name: string;
  kcal: number;
  protein: number;
  carbohydrates: number;
  fat: number;
  price: number;
  symbol: string;
  description: string;
}

const ELEMENT_DATA: FoodElement[] = [
  {
    name: 'Yogurt',
    kcal: 150,
    protein: 15,
    carbohydrates: 21,
    fat: 1,
    price: 14,
    symbol: 'Y',
    description: `Some description for yogurt`,
  },
  {
    name: 'Cheese',
    kcal: 50,
    protein: 17,
    carbohydrates: 11,
    fat: 21,
    price: 1.54,
    symbol: 'C',
    description: `Some description for cheese`,
  },
  {
    name: 'Chicken breast',
    kcal: 333,
    protein: 55,
    carbohydrates: 1,
    fat: 1,
    price: 3.54,
    symbol: 'C',
    description: `Some description for chicken breast`,
  },
  {
    name: 'Lettuce',
    kcal: 1550,
    protein: 15,
    carbohydrates: 51,
    fat: 3,
    price: 6.4,
    symbol: 'L',
    description: `Some description for lettuce`,
  },
];
