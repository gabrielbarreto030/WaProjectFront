import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private service:TodoService,
    private router:Router,
  ){
    this.form = this.fb.group({
      name:  ['', [Validators.required]],
      

    });


  }
  nameText = new FormControl('');


  form: FormGroup; 

  

  ngOnInit(): void {
  }
  criaTodo(){
    console.log(this.form.get('name')?.value);

    var todo=new Todo();

    todo.isReady=false;
    todo.title=this.form.get('name')?.value;

    this.service.post(todo).subscribe(x=>{
      console.log(x)
      this.router.navigate(['/home'])
    });

    
  }

}
