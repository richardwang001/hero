import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {PanelComponent} from "./panel/panel.component";

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styles: [
  ]
})
export class ViewChildComponent implements OnInit, AfterViewInit {

  // 加上 {static:true} 可以在初始化之后就能获取静态元素
  // @ViewChild('box',{static:true}) private boxel: ElementRef | undefined;
  @ViewChildren('box') private boxels!: QueryList<ElementRef>;
  // @ViewChild(PanelComponent,{static:true}) private panelInstance!: PanelComponent;
  // @ViewChild('panel',{static:true}) private panelInstance2!: PanelComponent;
  @ViewChildren(PanelComponent) private panelInstances!: QueryList<PanelComponent>;

  showOneChild: boolean = true;

  constructor() {
    // console.log('constructor',this.boxel);
  }

  ngOnInit(): void {
    // console.log('ngOnInit',this.boxel);
    // console.log(this.panelInstance2.el.nativeElement);
  }

  ngAfterViewInit(): void {
    // console.log('ngAfterViewInit',this.boxel);
    // console.log(this.panelInstances);
    this.panelInstances.changes.subscribe(changes => {console.log('changes',changes)})

  }

}
