import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  taskForm!: FormGroup;

  @Output() formData = new EventEmitter<Task>()
 
  constructor() { 

    this.taskForm = new FormGroup({
      name: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      status: new FormControl(false)
    })
  }


  ngOnInit(): void {
  }

  controls(){
    return this.taskForm.controls
  }

  submit(){
    console.log(this.taskForm.value)
    this.formData.emit(this.taskForm.value)
  }

}
