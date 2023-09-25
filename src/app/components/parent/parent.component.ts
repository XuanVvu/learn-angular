import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  @ViewChild('appChild') childComp: ChildComponent | undefined
  data = 'test data'
  count = 0;
  countParent: number = 0;
  inputType = 'text';
  name = '';

  isActive = false;

  authors = [
    {
      id: 1,
      firstName: 'Flora',
      lastName: 'Twell',
      email: 'ftwell0@phoca.cz',
      gender: 'Female',
      ipAddress: '99.180.237.33',
    },
    {
      id: 2,
      firstName: 'Priscella',
      lastName: 'Signe',
      email: 'psigne1@berkeley.edu',
      gender: 'Female',
      ipAddress: '183.243.228.65',
    },
  ];

  DataFromChild(count: any) {
    this.countParent = count;
    
  }

  handleClickParent( name: any ) {
    console.log(name);
    this.isActive = !this.isActive
    
  }
  appChildLog() {
    this.childComp?.log123();
  }
}
