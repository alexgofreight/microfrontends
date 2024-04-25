import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as ReactDOM from 'react-dom';
import * as React from 'react';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('reactCounterContainer', { static: true }) containerRef!: ElementRef;
  title = 'angular-host-app';

  ngOnInit() {
    import('reactApp/Counter').then(({ default: Counter }) => {
      ReactDOM.render(
        React.createElement(Counter, {}),
        this.containerRef.nativeElement
      );
    });
  }

  ngOnDestroy() {
    ReactDOM.unmountComponentAtNode(this.containerRef.nativeElement);
  }
}
