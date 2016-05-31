import {Component} from '@angular/core';

@Component({
    selector:'my-app',
    template: `<h1>Start</h1>
<input (autocomplete)="catch ">
<number-example></number-example>
`
})

export class AppComponent { }
