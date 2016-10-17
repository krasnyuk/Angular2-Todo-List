import { Component, ViewContainerRef } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
<div class="container">
    <nav-bar></nav-bar>
    
        <router-outlet></router-outlet>
    
</div>

`
})
export class AppComponent {
  private viewContainerRef: ViewContainerRef;
  public constructor(viewContainerRef:ViewContainerRef) {

    this.viewContainerRef = viewContainerRef;
  }
}
