import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tpl-var',
  templateUrl: './tpl-var.component.html',
  styles: [
  ]
})
export class TplVarComponent implements OnInit {
fontSize: number = 16;
  callPhone(value: string){
    console.log('callPhone', value);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
