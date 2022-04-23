import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.scss']
})
export class IfComponent implements OnInit {
  @Input() showBlock: boolean = true;
  showBlock2 = true;
  condition: boolean = false;
  elseBlock!: TemplateRef<any>;
  @ViewChild('firstBlock',{ static: true}) private firstBlock!: TemplateRef<any>;

  constructor() {
  }

  ngOnInit(): void {
    this.elseBlock = this.firstBlock;
  }

}
