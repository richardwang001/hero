import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styles: [
    `
    .change{
      width:800px;
      height:400px;
      background-color: #6f42c1;

    }

    .change  h2{
      color: #fff;
    }
    .change p {
      color: #fff;
      border: 1px solid #ffca2c;
    }

    `
  ]
})
export class ChangeComponent implements OnInit {
  heroName: string='卡特';
  arms = '多兰剑';
  constructor() { }

  ngOnInit(): void {
  }

}
