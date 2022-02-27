import { Component, OnInit } from '@angular/core';
import {Meal} from "../../shared/models/meal";

@Component({
  selector: 'nu-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  meals: Meal[] = [
    {title: 'Breakfast', subtitle: '8:00'},
    {title: 'Lunch'},
    {title: 'Snack', subtitle: '16:00'},
    {title: 'Dinner', subtitle: '21:00'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
