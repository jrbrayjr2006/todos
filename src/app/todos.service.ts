import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable()
export class TodosService {

  todos: Todo[] = []; // = [new Todo("Default todo")];
  todo1: Todo;

  constructor() {}

  getTodos() {
    return this.todos;
  }

  createTodo(todo: Todo) {
    this.todos.push(todo);
    console.info(this.todos);
  }

  clearTodos() {
    console.info("TodoService.clearTodos()...");
    this.todos = [];
  }

}
