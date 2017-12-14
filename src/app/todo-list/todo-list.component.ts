import { Component, OnInit, Renderer, ElementRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { TodosService } from '../todos.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  todo: Todo;
  todoSelectedIndex = 0;
  description: string;
  completed = false;
  taskCount = 0;
  dateCreated: Date;
  selectedTodo: any;
  index = -1;

  constructor(private todosService: TodosService, private renderer: Renderer) { }

  ngOnInit() {
    this.todos = this.todosService.getTodos();
  }

  onCreateTodo() {
    console.info("Triggered onCreateTodo...");
    this.todoSelectedIndex = this.todos.length + 1;
    this.dateCreated = new Date();
    this.todo = new Todo(this.description, this.completed, this.dateCreated, this.todoSelectedIndex);
    this.todosService.createTodo(this.todo);
    this.todos = this.todosService.getTodos();
    this.description = "";
    this.taskCount = this.todos.length;
  }

  // method should accept parameter for element
  onChangeStatus(selected: any) {
    console.info("Status changed...");
    return this.selectedTodo === selected;
    //this.isSelected();
    //this.renderer.setElementClass(el.nativeElement, 'completed-item', this.completed);
  }

  isSelected(selected: any) {
    console.info("Todo selected...");
    this.selectedTodo = selected;
    /*
    if(this.completed === false) {
      this.completed = true;
    } else {
      this.completed = false;
    }*/
  }

  clearAll() {
    console.info("clearAll()...");
    this.todosService.clearTodos();
    this.todos = this.todosService.getTodos();
    this.taskCount = this.todos.length;
  }

}
