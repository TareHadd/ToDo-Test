import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: '<footer><h4 class="text-light position-absolute">Made by Tarik :)</h4></footer>',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
