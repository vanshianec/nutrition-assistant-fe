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
  columnsToDisplay = ['description', 'kcal', 'protein', 'carbs', 'fat', 'price'];
  expandedElement: FoodElement | undefined;
}

export interface FoodElement {
  description: string;
  unit: string;
  protein: number;
  carbs: number;
  fat: number;
  kcal: number;
  price: number;
  symbol: string;
  innerText: string;
}

const ELEMENT_DATA: FoodElement[] = [
  {
    description: 'Yogurt (Vedrare), Lidl',
    unit: '350 grams',
    protein: 15,
    carbs: 21,
    fat: 1,
    kcal: 150,
    price: 14,
    symbol: 'Y',
    innerText: `Some description for yogurt`,
  },
  {
    description: 'Cheese (Olympus), Kaufland',
    unit: '3 oz',
    protein: 17,
    carbs: 11,
    fat: 21,
    kcal: 50,
    price: 1.54,
    symbol: 'C',
    innerText: `Some description for cheese`,
  },
  {
    description: 'Chicken breast',
    unit: '1 lb',
    protein: 55,
    carbs: 1,
    fat: 1,
    kcal: 333,
    price: 3.54,
    symbol: 'C',
    innerText: `Some description for chicken breast`,
  },
  {
    description: 'Milk',
    unit: '500 ml',
    protein: 15,
    carbs: 11,
    fat: 3,
    kcal: 50,
    price: 6.4,
    symbol: 'L',
    innerText: `Some description for lettuce`,
  },
];
