import { Component, OnInit } from '@angular/core';
export interface Heros {
  id:string;
  name:string;
}
@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.scss']
})
export class StructuralComponent implements OnInit {
  showUnless=false;

  show: boolean = true;
  fruit='grape';
heros:Heros[] = [
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

  trackByHero(index: number, hero: Heros): string {
    return hero.id;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
