import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  template: `
    <p>
      accordion works!
    </p>
    <ng-content></ng-content>
  `,
  styles: []
})
export class AccordionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
