import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

/**
 * @title Table with expandable rows
 */
@Component({
  selector: 'nu-food-table',
  templateUrl: 'food-table.component.html',
  styleUrls: ['food-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class FoodTableComponent {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['name', 'weight', 'protein', 'carbohydrates', 'fat'];
  expandedElement: FoodElement | undefined;
}

export interface FoodElement {
  name: string;
  weight: number;
  protein: number;
  carbohydrates: number;
  fat: number;
  symbol: string;
  description: string;
}

const ELEMENT_DATA: FoodElement[] = [
  {
    name: 'Yogurt',
    weight: 150,
    protein: 15,
    carbohydrates: 21,
    fat: 1,
    symbol: 'Y',
    description: `Some description for yogurt`,
  },
  {
    name: 'Cheese',
    weight: 50,
    protein: 17,
    carbohydrates: 11,
    fat: 21,
    symbol: 'C',
    description: `Some description for cheese`,
  },
  {
    name: 'Chicken breast',
    weight: 333,
    protein: 55,
    carbohydrates: 1,
    fat: 1,
    symbol: 'C',
    description: `Some description for chicken breast`,
  },
  {
    name: 'Lettuce',
    weight: 1550,
    protein: 15,
    carbohydrates: 51,
    fat: 3,
    symbol: 'L',
    description: `Some description for lettuce`,
  },
];
