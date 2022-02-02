import { Component } from '@angular/core';

@Component({
  selector: 'my-layout',
  template: `
        <my-skeleton>
          <section search>
            <my-search></my-search>
          </section>
          
          <section> 
            <my-main></my-main>
          </section>
          
          <section south>
            <my-south></my-south>
          </section>
          
          <section right>
            <my-right></my-right>
          </section>
        </my-skeleton>
      `,
  styles: [`
        .pane-content { padding: 0 10px; }
        h3 { font-size: 1.2em; margin: 10px 0; padding: 0; }
        p { margin: 0; padding: 0; }
    ` ]
})
export class MyLayoutComponent { }
