import { HttpClient,  HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment";
import { Todo } from "../models/todo.model";



@Injectable()
export class TodoService {
    
    private todoUrl: string = '';
    private httpHeaders = {};

    constructor(
        private http: HttpClient,
       
     
    ) {
       
        this.todoUrl = environment.urlApi+'todo';
        let headers = new HttpHeaders();            
        this.httpHeaders = headers;
    }

    public retornarTodos(): Observable<Todo[]> {

        return this.http.get<Todo[]>(this.todoUrl + '/retornartodos/', { headers: this.httpHeaders });          
        
    }   
    public post(todo:Todo): Observable<Todo> {

        return this.http.post<Todo>(this.todoUrl ,todo, { headers: this.httpHeaders });
          
       
    }   

    public put(todo:Todo): Observable<Todo> {

        return this.http.put<Todo>(this.todoUrl ,todo, { headers: this.httpHeaders });
          
       
    }   
    public delete(todo:Todo): Observable<Todo> {
      

        return this.http.delete<Todo>(this.todoUrl+"/"+todo.todoId , { headers: this.httpHeaders });
          
       
    }   


   

}