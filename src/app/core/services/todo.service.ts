import { Injectable, Input } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Task } from '../models/task';
import { map } from 'rxjs/operators'
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  constructor(private http: HttpClient) {}

  api: string = 'https://todo-c85a1-default-rtdb.firebaseio.com/todo.json';

  listTasks() {
    return this.http.get<{ [key: string]: Task }>(this.api).pipe(
      map((responseData) => {
        const dataArray: Task[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            dataArray.push({ ...responseData[key], id: key });
          }
        }

       
        for( let data of dataArray) {
        
          if(this.formatDate(new Date(), "MM/dd/yyyy") === this.formatDate(data.date, "MM/dd/yyyy") && !data.status){
            data.expiring = true;
            
            this.http.put( `https://todo-c85a1-default-rtdb.firebaseio.com/todo/${data.id}.json`,data).subscribe()
          }
        }

        return dataArray;
      })
    );
  }

  addTask(data: Task) {
    return this.http.post<Task>(this.api, data);
  }

  updateTasks(data: Task) {
    return this.http.put<Task>(
      `https://todo-c85a1-default-rtdb.firebaseio.com/todo/${data.id}.json`,
      data
    );
  }

  deleteTask(id: string) {
    return this.http.delete(
      `https://todo-c85a1-default-rtdb.firebaseio.com/todo/${id}.json`
    );
  }

  // We need to format date to be sure that our condition later is valid 
  formatDate(date: any, format:string){
    const datePipe = new DatePipe('en-US')
    return datePipe.transform(date, format)
  }

  // checkingTodoDate(id:any, inputDate:any, todayDate:any, singleTask: Task){
    
  //   inputDate = this.formatDate(new Date(inputDate), "MM/dd/yyyy")
  //   todayDate = this.formatDate(new Date, "MM/dd/yyyy")

  //   if( todayDate === inputDate ){
      
  //     const expired = true;
  //     const newData: any = {
  //       name: singleTask.name,
  //       date: singleTask.date,
  //       status: singleTask.status,
  //       expiring: expired
  //     }

  //     this.http.put( `https://todo-c85a1-default-rtdb.firebaseio.com/todo/${id}.json`, newData).subscribe()
  //     console.log('rjeseno')

  //   }

  //   console.log('pregledano')


  // }
}
