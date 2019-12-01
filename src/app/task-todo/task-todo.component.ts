import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-task-todo',
  templateUrl: './task-todo.component.html',
  styleUrls: ['./task-todo.component.css']
})
export class TaskTodoComponent implements OnInit {

  todos;
  task: String;
  modalRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private taskService: TodosService
  ) { }

  ngOnInit() {
    this.fetchList();
  }

  fetchList() {
    this.taskService.getAllTodoList().subscribe((res: any) => {
      this.todos = res.docs;
      console.log(this.todos);

    })
  }

  newTodo(data) {
    this.taskService.createTodo(data).subscribe((res: any) => {
      JSON.stringify(res);
      this.fetchList();
    })
  }

  onSubmit() {
    const event = {
      task: this.task,
      status: false
    }
    // console.log(event);
    // this.taskData = event;
    this.newTodo(event);
    this.task = '';
    this.modalRef.hide();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  delete(id) {
    var deleteNow = confirm('Are you sure to delete this task?')
    if (deleteNow) {
      this.taskService.deleteTodo(id).subscribe((res: any) => {
        JSON.stringify(res);
        this.fetchList();
      });
    }
  }

}
