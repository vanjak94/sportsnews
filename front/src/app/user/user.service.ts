import { IUser } from './models/user.model';
import { Observable, Subject, ReplaySubject } from 'rxjs';
import { ICreateUpdateUserDto } from './dtos/create-update-user.dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../../config';

const routes = {
  users: `${config.backendUrl}/api/users`,
  userById: `${config.backendUrl}/api/users/:id`,
};

@Injectable()
export class UserService {
  public userSubject: Subject<IUser[]>;
  constructor(private http: HttpClient) {
    this.userSubject = new ReplaySubject(1);
    this.refetchUsers();
  }

  getAll() {
    return this.userSubject;
  }

  getById(id: number) {
    return this.http.get<IUser>(routes.userById.replace(':id', id.toString()));
  }

  create(data: ICreateUpdateUserDto) {
    const observable = this.http.post<IUser>(routes.users, data);
    observable.subscribe((user) => {
      this.refetchUsers();
    });
    return observable;
  }

  update(data: ICreateUpdateUserDto) {
    const observable = this.http.put<IUser>(
      routes.userById.replace(':id', data.id as unknown as string),
      data
    );
    observable.subscribe((user) => {
      this.refetchUsers();
    });
    return observable;
  }

  refetchUsers() {
    this.http.get<IUser[]>(routes.users).subscribe((users) => {
      this.userSubject.next(users);
    });
  }
}
