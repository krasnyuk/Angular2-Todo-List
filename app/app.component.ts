import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
<nav-bar></nav-bar>
<div class="row">
    <div>
        <router-outlet></router-outlet>
    </div>
</div>

`
})
export class AppComponent { }
