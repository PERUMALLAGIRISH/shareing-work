import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  template: `
    <form [formGroup]="form">
      <div >
        <button (click)="addCreds()">Add</button>

        <div formArrayName="credentials" *ngFor="let creds of form.controls.credentials?.value; "> 
            <input placeholder="Username" formControlName="username">
            <input placeholder="Password" formControlName="password">  
        </div>

      </div>
    </form>
  `,
})
export class AppComponent  {
  form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      credentials: this.fb.array([]),
    });

  }

  addCreds() {
    const creds = this.form.controls.credentials as FormArray;
    creds.push(this.fb.group({
      username: '',
      password: '',
    }));
  }
}
