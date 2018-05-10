import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-lib',
  template: `
    <lib-hello></lib-hello>
  `,
  styles: []
})
export class LibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
