import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blink',
  template: '<div class="lds-circle"><div></div></div>',
  styleUrls: ['./blink.component.scss']
})
export class BlinkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
