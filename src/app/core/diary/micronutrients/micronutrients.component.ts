import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from "@angular/material/expansion";

@Component({
  selector: 'nu-micronutrients',
  templateUrl: './micronutrients.component.html',
  styleUrls: ['./micronutrients.component.css']
})
export class MicronutrientsComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion = new MatAccordion();

  constructor() { }

  ngOnInit(): void {
  }

}
