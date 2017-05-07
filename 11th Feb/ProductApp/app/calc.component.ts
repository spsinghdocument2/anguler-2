import { Component } from '@angular/core';

//Decorate ur class with Component
@Component({
    moduleId: module.id,
    selector: 'calc',
    template: `<h1>{{title}}</h1>`//Key above tab
})
export class CalcComponent {
    //title: string ="DJ";// varName : Typename = Value
    num1: number;
    num2: number;
    res: number;
    add() {
        this.res = this.num1 + this.num2;
    }
}