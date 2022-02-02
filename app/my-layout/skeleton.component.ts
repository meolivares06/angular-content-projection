import { Component } from '@angular/core';

@Component({
  selector: 'my-skeleton',
  template: `
        <kendo-splitter style="border:1px solid blue;height: 90vh;">
          
          <kendo-splitter-pane [collapsible]="true" size="30%">
            <div class="pane-content">
              <ng-content select="[search]"></ng-content>
            </div>
          </kendo-splitter-pane>

          <kendo-splitter-pane>
            <kendo-splitter orientation="vertical"  style="border:1px solid blue;">
            
              <kendo-splitter-pane  size="55%">
                <ng-content ></ng-content>
              </kendo-splitter-pane>

              <kendo-splitter-pane [collapsible]="true">
                <ng-content select="[south]"></ng-content>
              </kendo-splitter-pane>
            
            </kendo-splitter>
          </kendo-splitter-pane>

          <ng-template appExampleZippyContent>
            
            <kendo-splitter-pane>
              <div class="pane-content">
                <ng-content select="[right]"></ng-content>
              </div>
            </kendo-splitter-pane>
          </ng-template>


          
        </kendo-splitter>
      `,
  styles: [`
        .pane-content { padding: 0 10px; }
        h3 { font-size: 1.2em; margin: 10px 0; padding: 0; }
        p { margin: 0; padding: 0; }
    ` ]
})
export class SkeletonComponent { }
