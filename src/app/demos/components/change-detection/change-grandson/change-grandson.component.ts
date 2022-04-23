import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-change-grandson',
  templateUrl: './change-grandson.component.html',
  styles: [
 `   .change-grandson {
   width: 600px;
   height: 350px;
   background-color: #3a35c1;
 }

 .change-grandson h3 {
   color: #44b514;

 }

 .change-grandson p {
   color: #b5145c;

 }
 `
  ],changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeGrandsonComponent implements OnInit,OnChanges {
  @Input() position:string='下' ;
 grandsonName: string= "河蟹";
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes position",changes)
  }

  handleClick() {
    this.grandsonName='蛤蟆';
    console.log("孙子名改变了？",this.grandsonName)
  }
}
