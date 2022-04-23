import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.scss']
})
export class SizerComponent implements OnInit {
  @Input() size: number = 16;
  @Output() sizeChange = new EventEmitter<number>();

  inc(){
    this.sizeChange.emit(this.size +1)
  }

  dec() {
    this.sizeChange.emit(this.size -1)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
