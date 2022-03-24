import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  // inputs: ['show'],
  // outputs: ['closed']
})
export class DialogComponent implements OnInit {
  // show = false;
  @Input('visible') show = false;
  @Input() title = '';
  @Input() confirmLabel = '确定';
  @Input() cancelLabel = '取消';
  @Output('hide') closed = new EventEmitter<void>();
  // closed = new EventEmitter<void>();
  @Output() backDropClick = new EventEmitter<void>();
@Output() confirm = new EventEmitter<void>();

  onClose(){
    console.log('onClose');
    this.closed.emit();
  }

  onConfirm() {
    this.confirm.emit();
  }


  constructor() { }


  ngOnInit(): void {
  }
}
