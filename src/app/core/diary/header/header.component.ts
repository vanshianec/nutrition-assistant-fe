import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'nu-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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

  colorScheme1 = {
    name: 'color',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#2c83e3', '#3bc069', '#fc1d41']
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
