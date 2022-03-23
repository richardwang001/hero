import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hero';
  price = 6300;
  heroName: string = '盖伦';
  gender=0;
  li = "./assets/李小龙2.jpeg";
  g1 = "李小龙";
  colSpan = 2;
  customTitle="李小龙先生";

  hero = {
    name: this.customTitle,
    pic: this.li
  }

  getValue(){
    return 33;
  }

  get job(){
    return "前端工程师";
  }
}
