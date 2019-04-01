import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  template: `
    <p>
      accordion works!
    </p>
    <ng-content select="h3"></ng-content>
    <ng-content select=".stuff"></ng-content>
    
    <ng-content></ng-content>
  `,
  styles: []
})
export class AccordionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
