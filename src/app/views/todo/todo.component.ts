import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/core/models/task';
import { TodoService } from 'src/app/core/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  tasks: Task[] = []
  

  constructor(private service: TodoService) { }

  ngOnInit(): void {
    this.listTasks()
  }

 
  listTasks(){
    this.service.listTasks().subscribe(
      responseData =>{
        this.tasks = responseData
      }
    )
  }

  taskAdd(data: any){
    this.service.addTask(data).subscribe(
      resData => {
        this.listTasks()
      }
    )
  }

  taskFinished(data: Task){
    this.service.updateTasks(data).subscribe(
      resData =>{
        this.listTasks()
      }
    )
    
  }

  deleteTask(id: string){
    this.service.deleteTask(id).subscribe(
      resData => {
        this.listTasks()
      }
    )
  }

}
