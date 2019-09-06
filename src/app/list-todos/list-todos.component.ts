import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo
{
  constructor(public id:number,public subject:string,public done:boolean,public targetDate:Date)
  {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})


export class ListTodosComponent implements OnInit {

  todos:Todo[]
  message:string
  // =[
  //        new Todo(1,'telugu',false,new Date()),
  //        new Todo(2,'hindi',false,new Date()),
  //        new Todo(3,'english',true,new Date()),


        //  {id:1,subject:'telugu'},
        //  {id:2,subject:'hindi'},
        //  {id:3,subject:'english'}
       //  ]
  constructor(private todoservice:TodoDataService,private router:Router) { }

  ngOnInit() {
       this.refreshtodos()
  }

  refreshtodos()
  {
    this.todoservice.retrievealltodos('bharath').subscribe(
      response => {
         this.todos=response
      }
    )
  }
  deleteTodo(id)
  {
    this.todoservice.deleteTodo('bharath',id).subscribe(
      response => {this.message=`your id=${id} is deleted successfully`
      this.refreshtodos()
               }
      )
      
  }
  updateTodo(id)
  {
     this.router.navigate(['todos',id])
  }
  addTodo()
  {
    this.router.navigate(['todos',-1])
  }
}
