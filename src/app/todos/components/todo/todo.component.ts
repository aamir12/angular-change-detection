import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';
import { TodoInterface } from '../../types/todo.interface';
import { TodosService, User } from '../../services/todos.service';
import { Observable } from 'rxjs';

/***
 * Change Detection Mechnism
 * Q1 What is Change Detection
 * In Angular, change detection is the mechanism that updates the view whenever the state of 
 * the application changes. By default, Angular uses a strategy called "Zone. js" 
 * for change detection, which detects changes by monitoring the properties and methods of components and their associated templates.
 * 
 * Q2 How to implement Change Detection
 * changeDetection: ChangeDetectionStrategy.OnPush,
 * 
 * Q3 How Change Detection detect changes when we implement OnPush strategy  Machanism?
 *  1) when @Input change (In case of Array/Object new value is assign)
 *  2) When event(Click) is fired inside the template eg:  changeText;
 *  3) When async pipe is used with data stream
 *  4) Manually fired detect changes using  this.cd.detectChanges();
 *  5) Detect change not work with setTimeout
 */

@Component({
  selector: 'app-todos-todo',
  templateUrl: './todo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent implements OnInit {
  @Input('todo') todoProps: TodoInterface; //Input value change

  filter$: Observable<string>;
  users:User[] = [];
  constructor(
    private todosService: TodosService,
    private cd: ChangeDetectorRef,
    ) {
    this.filter$ = todosService.filter$;
  }

  ngOnInit() {
      this.loadUsers();
  }

  checkRender(): boolean {
    console.log('checkRender');
    return true;
  }

  changeText(): void {
    this.todoProps.text = 'Changed from inside'; //Event trigger
  }

  changeFilter(): void {
    this.todosService.filter$.next('active'); //async pipe and new stream emit
  }

  loadUsers() {
    this.todosService.loadUsers().subscribe(users=> {
      console.log(users);
      this.users = users;
      this.cd.detectChanges(); //detect change manually
    })

    //it will not work; we need to call detecChange method
    setTimeout(() => {
      this.changeText();
    },5000)
  }
}
