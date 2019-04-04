import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild
} from '@angular/core';
import {AccNodeComponent} from './acc-node.component';

@Component({
  selector: 'app-accordion',
  template: `
    <ng-content></ng-content>
  `,
  styles: []
})
export class AccordionComponent implements OnInit, AfterViewInit, AfterContentInit {
  @ContentChildren(AccNodeComponent) nodes: QueryList<AccNodeComponent>;

  ngAfterContentInit(): void {
    this.subscribeToNodes();
    // this.nodes.changes.subscribe(this.subscribeToNodes.bind(this));
  }

  private subscribeToNodes(): void {
    this.nodes.forEach((node: AccNodeComponent) => {
      node.nodeClicked.subscribe(this.onNodeClicked.bind(this));
    });
  }

  onNodeClicked(clieckedNode: AccNodeComponent): void {
    this.nodes
      .filter((node) => node !== clieckedNode)
      .forEach((node) => {
        node.expanded = false;
      });
  }

}
