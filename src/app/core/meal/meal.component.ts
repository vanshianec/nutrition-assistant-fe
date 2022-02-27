import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'nu-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {
  @Input() title: string = '';
  @Input() subtitle?: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
