import {Component, OnInit} from '@angular/core';
import Heros from './hero';

export interface Hero {
  id: string;
  name: string;
}

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styles: [
    ` .even {
      color: #82fa54;
    }

    .odd {
      color: #fa697a;
    }`

  ]
})
export class ForComponent implements OnInit {

  value = '';
  heros: Hero[] = Heros;

  add() {
    this.heros.push({
      id: 'hero' + Date.now(),
      name: this.value,
    })
  }

  reset() {
    this.heros = [
      {
        id: 'hero_4',
        name: '盖伦4'
      },
      {
        id: 'hero_5',
        name: '赵信5'
      },
      {
        id: 'hero_2',
        name: '嘉文'
      },
      {
        id: 'hero_6',
        name: '易大师6'
      },
      {
        id: 'hero_7',
        name: '泰达米尔7'
      }
    ];
  }

// TODO
  trackByHero(index: number, hero: Hero): string {
    return hero.id;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
