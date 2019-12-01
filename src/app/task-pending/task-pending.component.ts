import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-task-pending',
  templateUrl: './task-pending.component.html',
  styleUrls: ['./task-pending.component.css']
})
export class TaskPendingComponent implements OnInit {

  private todos;
  private task;

  constructor(
    private taskService: TodosService
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

  markAsDone(data) {
    console.log(`id `,data._id);
    const event = {
      task: data.task,
      status: true
    }
    // console.log(`mark as done -- `,event);
    console.log(`id `,data.id);
    
    this.taskService.updateTodo(data._id, event).subscribe((res: any) => {
      JSON.stringify(res);
    })
  }

}
