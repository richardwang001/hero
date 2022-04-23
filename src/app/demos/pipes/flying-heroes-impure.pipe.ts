import { Pipe, PipeTransform } from '@angular/core';
import {Hero} from "../types";

@Pipe({
  name: 'flyingHeroesImpure',
  pure:false
})
export class FlyingHeroesImpurePipe implements PipeTransform {

  transform(allHeroes: Hero[]): Hero[] {
    return allHeroes.filter(hero => hero.canFly);
  }

}
