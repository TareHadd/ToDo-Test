import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/core/models/task'
import { TodoService } from './core/services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ToDo';

  // tasks: Task[] = []
  // todayDate!:any

  constructor(private service:TodoService){}

  ngOnInit(): void {
  }

  // getTasks(){
  //   this.service.listTasks().subscribe(
  //     responseData =>{
  //       this.tasks = responseData
  //     }
  //   )
  // }

  
  // checkingTaskDate(tasks: Task[]){
  //   for(let task of tasks){
  //     this.service.checkingTodoDate(task.id, task.date, this.todayDate, task)
  //   }
  // }


}
