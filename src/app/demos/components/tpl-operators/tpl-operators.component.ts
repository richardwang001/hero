import { Component, OnInit } from '@angular/core';
import {Hero} from "../for/for.component";

@Component({
  selector: 'app-tpl-operators',
  templateUrl: './tpl-operators.component.html',
  styles: [
  ]
})
export class TplOperatorsComponent implements OnInit {
  title: string = 'aBc';
  now = Date.now();
  hero: Hero | undefined;
  name: string | null = 'aaa';

  obj = {
    name:"aaa",
    time:'1980-02-25T05:00:00.000Z',
    price:'$333'
  }
  constructor() {
    setTimeout(() => {
      this.hero={
        id: 'hero_1',
        name:'卡特'
      }
    },1000);
  }

  ngOnInit(): void {
    const heroName:string = this.name!;
  }

}
