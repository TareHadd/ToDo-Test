import { Component, OnInit, OnDestroy} from '@angular/core';
import { Task } from 'src/app/core/models/task';
import { TodoService } from 'src/app/core/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnDestroy{

  tasks: Task[] = []
  todayDate!:any
  showForm = true;

  fetching = false;


  constructor(private service: TodoService) {
   }

  ngOnInit(): void {
    this.todayDate = this.service.formatDate(new Date, "MM/dd/yyyy")
    this.listTasks()
  }


  /*
    These methods are responsible for doing action, 
    they get data from components and use service for doing action.
  */

  listTasks(){
    this.fetching = true
    this.service.listTasks().subscribe(
      responseData =>{
        this.tasks = responseData
        this.fetching = false
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


  ngOnDestroy(){}


  showAddForm(){
    this.showForm = !this.showForm
  }
  

}
