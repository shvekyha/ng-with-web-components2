import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div style="width:400px" class="mainDiv"> 
      <paper-input label="first name"></paper-input>
      <paper-input label="last name"></paper-input>
      <paper-input label="phone number"></paper-input>
    </div>
  `,
  styles: [`
    div{
      margin:auto;
    }
  `]
})
export class AppComponent { }