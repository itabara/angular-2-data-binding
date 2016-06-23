import {Component} from 'angular2/core';
import {PropertyBindingComponent} from "./property-binding.component";

@Component({
    selector: 'my-app',
    template: `
      <section class="parent">
      <h2>This is my parent component</h2>
      <h4>Please enter your name</h4>
      <input type="text" [(ngModel)]="firstName">
      <input type="text" [(ngModel)]="lastName">
      <br><br>
      <p>{{firstName}}</p>
      <p>{{lastName}}</p>
      <section class="child">
        <my-property-binding [myFirstName]="firstName" [myLastName]="lastName"
        [myAge]="24" (hobbiesChanged)="hobbies = $event" ></my-property-binding>
      </section>
      <h4>My hobbies are: {{hobbies}}</h4>
      </section>
    `,
    directives:[PropertyBindingComponent]
})
export class AppComponent {
  firstName='';
  lastName='';
  hobbies='';
}
