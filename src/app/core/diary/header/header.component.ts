import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'nu-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  data: any;

  ngOnInit(): void {
    this.data = {
      labels: ['Protein', 'Carbs', 'Fat'],
      datasets: [
        {
          data: [270, 190, 55],
          backgroundColor: [
            "#2c83e3",
            "#3bc069",
            "#fc1d41"
          ]
        }
      ]
    }
  }
}
