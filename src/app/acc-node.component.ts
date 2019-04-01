import {Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-acc-node',
  template: `
    <h1 (click)="swapState()">
      <ng-container *ngTemplateOutlet="titleTemplate">></ng-container>
    </h1>
    <div [@wrapper] class="wrapper" *ngIf="expanded">
      <ng-content></ng-content>
    </div>
    <ng-template #default>
      Click to Expand
    </ng-template>
  `,
  styles: [`
    :host {
      display: block;
    }

    h1 {
      color: red;
      cursor: pointer;
    }

  `],
  animations: [
    trigger('wrapper', [
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate('0.5s', style({height: '*', opacity: 1}))
      ]),
      transition('* => *', [
        animate('0.5s', style({opacity: 0})),
        animate('0.2s', style({height: '0px'}))
      ])
    ]),
  ]
})
export class AccNodeComponent implements OnInit {
  @Input() expanded = false;
  @Output() nodeClicked = new EventEmitter<AccNodeComponent>();
  @ViewChild('default', {read: ElementRef}) defaultTitle: ElementRef<any>;
  @ContentChild('accTitle') titleTemplate: TemplateRef<any>;

  swapState() {
    this.expanded = !this.expanded;
    this.nodeClicked.emit(this);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
