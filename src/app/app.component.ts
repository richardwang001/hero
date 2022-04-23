import {Component, ViewChild} from '@angular/core';
import { NgModel } from '@angular/forms';
import {transferItem} from "./demos/components/transfer-panel/types";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  color = 'green';

  showBlock: boolean = true;
  list: transferItem[] = [];
  @ViewChild(NgModel) private ngModel: NgModel | undefined;

  constructor() {
    this.setList();
  }
  reset(){
    this.setList();
  }
  onChanged(selecteds:transferItem[]){
    console.log('onChanged', selecteds);
  }
  private setList(){
    this.list = [];
    const prefix = 'item' + Date.now().toString().slice(-3);
    for (let i = 0; i < 20; i++) {
      this.list.push({
        // @ts-ignore
        key: prefix + '_' + i,
        // @ts-ignore
        value:`${prefix}${i + 1}`,
        // @ts-ignore
        checked: i % 6 === 0
      });
    }
  }


}
