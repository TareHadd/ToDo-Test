import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';
import { Task } from 'src/app/core/models/task';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

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
  show = true;

  id!:any;

  constructor(config: NgbModalConfig, private modalService: NgbModal) { }

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

  delete(data:Task, content: any){
    if(!data.status){
      this.open(content)
      this.id = data.id
    }else{
      this.deleteTask.emit(data.id)
    }
    
  }

  deleteFromModal(){
    this.deleteTask.emit(this.id)
    this.modalService.dismissAll('Cross click')
  }


  shown(){
    this.show = false;
  }

  open(content: any) {
    this.modalService.open(content,  { centered: true });
  }

}
