import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-task-done',
  templateUrl: './task-done.component.html',
  styleUrls: ['./task-done.component.css']
})
export class TaskDoneComponent implements OnInit {

  private todos;
  constructor(
    private taskService:TodosService
  ) { }

  ngOnInit() {
    this.fetchList();
  }

  fetchList() {
    this.taskService.getAllTodoList().subscribe((res: any) => {
      this.todos = res.docs;
      JSON.stringify(res);
    })
  }

}
