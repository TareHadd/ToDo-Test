import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { TodoService } from 'src/app/core/services/todo.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  taskForm!: FormGroup;
  expiring:boolean = false
  data!: any

  todayDate!:any
  inputDate!: any

  submitted = false;
  dateOld = '';

  name!:string
  nameError = ''

  @Output() formData = new EventEmitter<Task>()
 
  constructor(private service: TodoService) { 

    this.taskForm = new FormGroup({
      name: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      status: new FormControl(false),
      expiring: new FormControl(true)
    })
  }


  ngOnInit(): void {
    this.todayDate = this.service.formatDate(new Date, "MM/dd/yyyy")
  }


  controls(){
    return this.taskForm.controls
  }

  get formControls(){
    return this.taskForm.controls
  }


  
  submit(){

    // Validation before sending/emmiting data 
    this.submitted = true;
  
    if(this.formControls.name.value === ''){
      return
    }

    if(this.formControls.name.value){
      this.name = this.formControls.name.value
      if(this.name.length > 30 ){
        this.nameError = 'Naziv vašeg taska je predug, maksimum je 30 slova.'
        return
      }
    }

    this.inputDate = this.service.formatDate(new Date(this.controls().date.value), "MM/dd/yyyy")
    
    /* Logic for date, if input is today,
     that means there is less than 24hours left
    to finsih task, and automatically its expiring.*/

    if( this.todayDate <= this.inputDate ){
      if( this.todayDate === this.inputDate ){
        this.expiring = true
      }else
      {
        this.expiring = false
      }
      this.formValue(
        this.controls().name.value, 
        this.controls().date.value, 
        this.controls().status.value, 
        this.expiring
        )
      
      this.formData.emit(this.data)
      this.submitted = false;
      this.nameError = ''
      
    }else{
      this.dateOld = 'Datum ne moze biti star!'
    }

    this.taskForm.reset()
  }



  // This will be useful for expiring value, thats why we write form value again
  formValue(name:string,date:Date,status:boolean,expiring:boolean){
    this.data = {
      name: name,
      date: date,
      status: status,
      expiring: expiring
    }
    return this.data;
  }


}
