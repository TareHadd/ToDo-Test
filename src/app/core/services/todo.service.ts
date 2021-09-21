import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Task } from '../models/task';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  api: string = 'https://todo-c85a1-default-rtdb.firebaseio.com/todo.json';

  listTasks(){
    return this.http.get<{[key:string]: Task}>(this.api).pipe(
      map(
        responseData => {
          const dataArray: Task[] = [];
          for(const key in responseData)
          {
            if(responseData.hasOwnProperty(key))
            {
              dataArray.push({ ...responseData[key], id: key});
            }
          }
          return dataArray;

        }
      )
    );
  }

  addTask(data: Task){
    return this.http.post<Task>(this.api, data)
  }

  updateTasks(data: Task){
    return this.http.put<Task>(`https://todo-c85a1-default-rtdb.firebaseio.com/todo/${data.id}.json`, data)
  }

  deleteTask(id: string){
    return this.http.delete(`https://todo-c85a1-default-rtdb.firebaseio.com/todo/${id}.json`)
  }
}
