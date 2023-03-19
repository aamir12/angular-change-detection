import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosComponent } from 'src/app/todos/components/todos/todos.component';
import { Routes, RouterModule } from '@angular/router';
import { TodosService } from './services/todos.service';
import { TodoComponent } from './components/todo/todo.component';
import { TestChidComponent } from './components/test-chid/test-chid.component';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
  },
];

@NgModule({
  declarations: [TodosComponent, TodoComponent, TestChidComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [TodosService],
})
export class TodosModule {}
