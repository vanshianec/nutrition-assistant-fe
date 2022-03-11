import {Component, OnInit, ViewChild} from '@angular/core';
import {ScaleType} from "@swimlane/ngx-charts";
import {MatAccordion} from "@angular/material/expansion";

@Component({
  selector: 'nu-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion = new MatAccordion();

  single1: any[] = [
    {
      "name": "Protein",
      "value": 250
    },
    {
      "name": "Carbs",
      "value": 180
    },
    {
      "name": "Fat",
      "value": 80
    }
  ];

  single2: any[] = [
    {
      "name": "Vitamin A",
      "value": 250
    },
    {
      "name": "Vitamin B12",
      "value": 180
    },
    {
      "name": "Vitamin D",
      "value": 10
    },
    {
      "name": "Vitamin E",
      "value": 84
    }
    ,
    {
      "name": "Vitamin B1",
      "value": 5
    }
  ];

  single3: any[] = [
    {
      "name": "Iron",
      "value": 15
    },
    {
      "name": "Copper",
      "value": 36
    },
    {
      "name": "Zinc",
      "value": 77
    },
    {
      "name": "Selenium",
      "value": 43
    }
    ,
    {
      "name": "Magnesium",
      "value": 64
    }
  ];

  colorScheme1 = {
    name: 'color',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#2c83e3', '#fc1d41', '#3bc069']
  };

  colorScheme2 = {
    name: 'color',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#4e6b88', '#b4132c', '#95ab9b', '#cccb41', '#3a1019']
  };

  colorScheme3 = {
    name: 'color',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#107cea', '#8ec22b', '#8332b2', '#9f5d4f', '#1531df']
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
