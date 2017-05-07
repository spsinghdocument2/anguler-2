import { Component } from '@angular/core';

@Component({//input is object
    selector: 'pm-app',
    template: `
        <h1>{{title}}</h1>
        <calc></calc>
    `
})
export class AppComponent {

    title : string = "Hello Angular";

 }
