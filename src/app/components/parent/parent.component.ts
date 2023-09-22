import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  data = 'test data'
  countParent: number = 0;
  DataFromChild(count: any) {
    this.countParent = count;
    
  }
}
