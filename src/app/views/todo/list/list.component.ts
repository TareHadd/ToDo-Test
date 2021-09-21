import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';
import { Task } from 'src/app/core/models/task';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() tasks!: Task[]
  @Output() finishedOrNot = new EventEmitter<Task>()
  @Output() deleteTask = new EventEmitter<any>()

  finished!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  finishedTask(data: Task){
    this.finished = data.status
    const newData = {
      id: data.id,
      name: data.name,
      date: data.date,
      status: !this.finished
    }
    this.finishedOrNot.emit(newData)
  }

  delete(data:Task){
    this.deleteTask.emit(data.id)
  }


}
