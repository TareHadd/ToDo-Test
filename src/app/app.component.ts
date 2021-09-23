import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/core/models/task'
import { TodoService } from './core/services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private service:TodoService){}

  ngOnInit(): void {
  }

}
