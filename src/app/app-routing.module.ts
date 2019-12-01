import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskTodoComponent } from './task-todo/task-todo.component';
import { TaskPendingComponent } from './task-pending/task-pending.component';
import { TaskDoneComponent } from './task-done/task-done.component';

const routes: Routes = [
  { path: '', redirectTo: '/mytask', pathMatch: 'full' },
  { path: 'mytask', component: TaskTodoComponent },
  { path: 'task-pending', component: TaskPendingComponent },
  { path: 'task-done', component: TaskDoneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
