import {Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-acc-node',
  template: `
    <h1 (click)="swapState()">
      <ng-container *ngTemplateOutlet="titleTemplate">></ng-container>
    </h1>
    <div class="wrapper" *ngIf="expanded">
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

  `]
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
