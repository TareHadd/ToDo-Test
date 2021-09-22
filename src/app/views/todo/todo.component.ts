import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { Task } from 'src/app/core/models/task';
import { TodoService } from 'src/app/core/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnDestroy, DoCheck{

  tasks: Task[] = []
  todayDate!:any
  showForm = true;


  constructor(private service: TodoService) {
   }

  ngOnInit(): void {
    this.todayDate = this.service.formatDate(new Date, "MM/dd/yyyy")
    this.listTasks()
  }


  ngOnDestroy(){}

  ngDoCheck(){

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
        console.log(data)
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


  // checkingTaskDate(tasks: Task[]){
  //   for(let task of tasks){
  //     this.service.checkingTodoDate(task.id, task.date, this.todayDate, task)
  //   }
  // }

  showAddForm(){
    this.showForm = !this.showForm
  }
  

}
