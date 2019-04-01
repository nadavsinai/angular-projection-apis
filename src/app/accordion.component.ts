import {AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-accordion',
  template: `
    <p #viewStuff>
      accordion works!
    </p>
    <ng-content select="h3"></ng-content>
    <ng-content select=".stuff"></ng-content>

    <ng-content></ng-content>
  `,
  styles: []
})
export class AccordionComponent implements OnInit, AfterViewInit, AfterContentInit {
  @ViewChild('viewStuff') viewStuff: ElementRef;
  @ContentChild('h3') projectedStuff: ElementRef;

  constructor() {
  }

  ngAfterContentInit() {
    console.log(this.projectedStuff);
  }

  ngAfterViewInit() {
    console.log(this.viewStuff);
  }


}
