import {
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild
} from '@angular/core';
import {PanelComponent} from "../view-child/panel/panel.component";

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styles: []
})
export class ContentChildComponent implements OnInit, AfterViewInit {

  // @ContentChild('list',{static:true}) private listEl!: ElementRef;
  @ContentChildren('list') private listEls!: QueryList<ElementRef>;
  @ContentChild('span', {static: true}) private spanEl!: ElementRef;
  // @ContentChild(PanelComponent,{static:true}) private panelInstance!: PanelComponent;
  @ContentChildren(PanelComponent,{descendants:true}) private panelInstances!: QueryList<PanelComponent>;

  constructor() {
  }

  ngOnInit(): void {
    // console.log(this.listEl.nativeElement);
    // console.log(this.spanEl.nativeElement);
    // console.log(this.panelInstance.el.nativeElement.firstChild.outerHTML);
  }

  ngAfterViewInit(): void {
    console.log(this.panelInstances);
  }

}
