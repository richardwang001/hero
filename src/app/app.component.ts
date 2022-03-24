import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'hero';
  showModal: boolean = false;
size: number =16;
  onClose(){
    console.log(`接收 onClose()`);
    this.showModal=false;
  }

  onOnConfirm(){
    console.log(`������ onConfirm()`);
    this.onClose();
  }
}
