import {AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-accordion',
  template: `
    
    <ng-content></ng-content>
  `,
  styles: []
})
export class AccordionComponent implements OnInit, AfterViewInit, AfterContentInit {
  @ContentChild('h3') projectedStuff: ElementRef;

  constructor() {
  }

  ngAfterContentInit() {
    console.log(this.projectedStuff);
  }



}
