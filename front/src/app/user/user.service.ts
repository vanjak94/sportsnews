import { IUser } from './models/user.model';
import { Observable, Subject, ReplaySubject } from 'rxjs';
import { ICreateUpdateUserDto } from './dtos/create-update-user.dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../../config';
import { map } from 'rxjs/operators';

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
    return this.http.post<IUser>(routes.users, data).pipe(
      map((data) => {
        this.refetchUsers();
        return data;
      })
    );
  }

  update(data: ICreateUpdateUserDto) {
    return this.http
      .post<IUser>(
        routes.userById.replace(':id', data.id as unknown as string),
        data
      )
      .pipe(
        map((data) => {
          this.refetchUsers();
          return data;
        })
      );
  }

  refetchUsers() {
    this.http.get<IUser[]>(routes.users).subscribe((users) => {
      this.userSubject.next(users);
    });
  }
}
