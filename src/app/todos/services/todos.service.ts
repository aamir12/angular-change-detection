import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface User {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

export interface Geo {
  lat: string
  lng: string
}

export interface Company {
  name: string
  catchPhrase: string
  bs: string
}


@Injectable()
export class TodosService {
  api = 'https://jsonplaceholder.typicode.com/users';
  filter$ = new BehaviorSubject('all');
  constructor(private http:HttpClient) {}

  loadUsers():Observable<User[]> {
    return this.http.get<User[]>(this.api);
  }

}
