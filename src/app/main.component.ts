import { Component, Input } from '@angular/core';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  // tslint:disable-next-line:variable-name
  private _name = '';

  @Input()
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
    this.addItem(this._name);
  }

  persons: string[] = [
    'Dovahkiin'
  ];

  addItem(value) {
    this.persons.push(value);
  }

  constructor() { }
}
