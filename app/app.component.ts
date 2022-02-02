import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
        <my-layout></my-layout>
      `,
  styles: [`
        .pane-content { padding: 0 10px; }
        h3 { font-size: 1.2em; margin: 10px 0; padding: 0; }
        p { margin: 0; padding: 0; }
    ` ]
})
export class AppComponent { }
