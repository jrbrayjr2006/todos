import { Component, OnInit, Renderer, ElementRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { TodosService } from '../todos.service';
import { Todo } from '../todo.model';
import { FormGroup, FormControl, NgForm } from '@angular/forms';

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
    console.info('Triggered onCreateTodo...');
    if(this.description.length === 0) {
      return;
    } else {
      this.todoSelectedIndex = this.todos.length + 1;
      this.dateCreated = new Date();
      this.todo = new Todo(this.description, this.completed, this.dateCreated, this.todoSelectedIndex);
      this.todosService.createTodo(this.todo);
      this.todos = this.todosService.getTodos();
      this.description = '';
      this.taskCount = this.todos.length;
    }
  }

  // method should accept parameter for element
  onChangeStatus(selected: any) {
    console.info('Status changed...');
    return this.selectedTodo === selected;
  }

  isSelected(selectedIndex: number) {
    console.info('Todo selected...');
    this.todos[selectedIndex - 1].setCompleted(!this.todos[selectedIndex - 1].isCompleted());
  }

  clearAll() {
    console.info('clearAll()...');
    this.todosService.clearTodos();
    this.todos = this.todosService.getTodos();
    this.taskCount = this.todos.length;
  }

  simpleValidation() {

  }

}
