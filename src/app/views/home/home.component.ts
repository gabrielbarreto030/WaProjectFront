import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allComplete: boolean = false;
  todos:Todo[]=[]

  constructor(
    private service:TodoService
  ) { }

  ngOnInit(): void {
    this.service.retornarTodos().subscribe(x=>{
      this.todos=x;
   
    })

  }
  updateTodo(completed:boolean,todo:Todo){

    console.log(completed);
    todo.isReady=completed;
    this.service.put(todo).subscribe(x=>{

    })


  }
  apagarTodo(todo:Todo){
    this.service.delete(todo).subscribe(x=>{
      this.service.retornarTodos().subscribe(x=>{
        this.todos=x;
 
      })

    })
  }

}
