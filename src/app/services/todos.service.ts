import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }

  getAllTodoList() {
    return this.http.get(environment.apiBaseUrl + '/todos');
  }

  createTodo(data) {
    return this.http.post(environment.apiBaseUrl + '/todos', data);
  }

  updateTodo(id, data) {
    return this.http.put(environment.apiBaseUrl + '/todos/' + id, data);
  }

  deleteTodo(id) {
    return this.http.delete(environment.apiBaseUrl + '/todos/' + id);
  }
}
