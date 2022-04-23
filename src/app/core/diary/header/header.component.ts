import {Component, OnInit} from '@angular/core';
import {ChartType} from "angular-google-charts";

@Component({
  selector: 'nu-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  charType: ChartType = ChartType.PieChart;

  data = [
    [
      "Protein", 1080
    ],
    [
      "Carbs", 700
    ],
    [
      "Fat", 900
    ]
  ];


  options = {
    colors: ['#2c83e3', '#3bc069', '#fc1d41'],
    tooltip: {'text': 'percentage'},
    legend: {'position': 'top', 'alignment' : 'center'},
    is3D: true
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
