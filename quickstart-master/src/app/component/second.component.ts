import {Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'newComponent',
  template: `<h1>Hello {{name}}</h1>
   <button (click)='increment()'>Increment</button>
    {{count}}
    <button (click)='decrement()'>Decrement</button>
    <h2>{{_name}}</h2>
    <input type="text" #childtext (keyup)="onChange(childtext.value)">
    {{_name2}}
  `,
})
export class newComponent 
 {
 name = 'saurabh pratap singh';
 count : number = 0; 
  _name: string;   
   _name2: string ="wwwwwwwwwwww";

     @Output() counterChange :  EventEmitter<number>;
        constructor(){
         
            this.counterChange = new EventEmitter();
         
        }
     
     @Input() 
        get counter(){

            return this.count; 
        }

        increment(){

            this.count = this.count+1; 
            this.counterChange.emit(this.count);
        }

        decrement(){
            this.count = this.count - 1; 
            this.counterChange.emit(this.count );
        }

        //------------------------------

         @Input()
        set Name(name : string )
        {
            //alert(name);
            this._name = (name && name.trim()) || "I am default name"; 
        }
        get Name()
        {
            return this._name;
        }
        //---------------------------
       //@Input() parentData :string ="wwwwwwwwwwww";
      
       @Input()
        set parentData(name : string )
        {
          //  alert(name);
            this._name2 = name; 
        }
        get parentData()
        {
            return this._name2;
        }

        //---------------------------
       @Output() childEvent = new EventEmitter<string>();
        onChange(value:string)
        {
          this.childEvent.emit(value);
        }

  }
