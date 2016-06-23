import {Component} from 'angular2/core';
import {Input} from 'angular2/core';
import {EventEmitter} from 'angular2/core';

@Component({
  selector: 'my-property-binding',
  template: `
    <h2>This is the child component</h2>
    <p>Hey {{firstName}} {{lastName}} and I am {{age}} years old!</p>
    <h4>My hobbies are:</h4>
    <input type="text" (keyup)="onHobbiesChanged(hobbies.value)" #hobbies>
  `,
  inputs:['firstName:myFirstName', 'age: myAge'],
  outputs: ['hobbiesChanged']
})

export class PropertyBindingComponent{
  firstName='';
  @Input('myLastName') lastName='';
  age = 20;
  hobbiesChanged = new EventEmitter<string>();

  onHobbiesChanged(hobbies: string){
    this.hobbiesChanged.emit(hobbies);
  }
}
