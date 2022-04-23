import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked, AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styles: []
})
export class LifeCycleComponent implements OnChanges, OnInit,DoCheck,AfterContentInit,AfterContentChecked, AfterViewChecked, AfterViewInit,AfterViewChecked, OnDestroy {
  @Input() title: string = '默认';

  constructor() {
    console.log('1 constructor',this.title);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('2 ngOnChanges',this.title);
  }

  ngOnInit(): void {
    console.log('3 ngOnInit',this.title);
  }

  ngDoCheck(): void {
    console.log('4 ngDoCheck',this.title);
  }

  ngAfterContentInit(): void {
    console.log('5 ngAfterContentInit',this.title);

  }

  ngAfterContentChecked(): void {
    console.log('6 ngAfterContentChecked',this.title);

  }

  ngAfterViewInit(): void {
    console.log('7 ngAfterViewInit',this.title);

  }

  ngAfterViewChecked(): void {
    console.log('8 ngAfterViewChecked',this.title);

  }

  ngOnDestroy(): void {
    console.log('9 ngOnDestroy',this.title);
  }

  onInput() {

  }
}
