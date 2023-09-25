import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() data: string | undefined;
  @Input() name: string | undefined;
  @Output() count = new EventEmitter<number>();
  countData = 0;



  handleClick() {
    this.countData ++;
    this.count.emit(this.countData);
    
  }
  log123() {
    console.log('123 from child');
    
  }

}
