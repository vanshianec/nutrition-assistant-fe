import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Food} from "../../../../shared/models/food";
import {ColumnData} from "./column-data";

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
export class FoodTableComponent implements OnInit {
  @Input() descriptionTitle: string = 'Breakfast';
  @Input() descriptionSubtitle?: string = '9:00';

  dataSource = ELEMENT_DATA;
  expandedElement: Food | undefined;

  columnData: ColumnData[] = [{name: 'description'}, {name: 'calories', displayUnit: 'kcal'},
    {name: 'protein', displayUnit: 'g'}, {name: 'carbs', displayUnit: 'g'}, {name: 'fat', displayUnit: 'g'},
    {name: 'price', displayUnit: 'EUR'}, {name: 'deleteRow'}];

  columnToDisplay: string[] | undefined;

  ngOnInit(): void {
    this.columnToDisplay = this.columnData.map(c => c.name);
  }

  getTotalAmount(key: string): number {
    return this.dataSource
      .map(column => +column[key as keyof Food])
      .reduce((acc, value) => acc + value, 0);
  }
}

const ELEMENT_DATA: Food[] = [
  {
    description: 'Vedrare - Cottage Cheese (Kaufland), 400 g',
    unit: 350,
    displayUnit: 'g',
    protein: 15,
    carbs: 21,
    fat: 1,
    calories: 150,
    price: 14,
    symbol: 'Y',
    innerText: `Some description for yogurt`,
  },
  {
    description: 'Olympus - Feta Cheese (Kaufland), 3 oz',
    unit: 3,
    displayUnit: 'oz',
    protein: 17,
    carbs: 11,
    fat: 21,
    calories: 50,
    price: 1.54,
    symbol: 'C',
    innerText: `Some description for cheese`,
  },
  {
    description: 'Chicken breast (Lidl), 1 lb',
    unit: 1,
    displayUnit: 'lb',
    protein: 55,
    carbs: 1,
    fat: 1,
    calories: 333,
    price: 3.54,
    symbol: 'C',
    innerText: `Some description for chicken breast`,
  },
  {
    description: 'Vereya - Milk (Lidl), 500 ml',
    unit: 500,
    displayUnit: 'ml',
    protein: 15,
    carbs: 11,
    fat: 3,
    calories: 50,
    price: 6.4,
    symbol: 'L',
    innerText: `Some description for lettuce`,
  },
];
