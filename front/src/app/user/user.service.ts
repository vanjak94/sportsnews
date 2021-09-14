import { ICreateUpdateUserDto } from './dtos/create-update-user.dto';
import { IUser } from './models/user.model';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getAll() {
    return of<IUser[]>([
      {
        id: 44,
        name: 'Vanja Krstonosic',
        username: 'foo',
        isAdmin: true,
        isActive: true,
      },
      {
        id: 11,
        name: 'Banja KK',
        isAdmin: true,
        username: 'foo',
        isActive: true,
      },
      {
        id: 33,
        name: 'Aiko Matic',
        username: 'foo',
        isAdmin: true,
        isActive: true,
      },
    ]);
  }

  getById(id: number) {
    return of<IUser>({
      id,
      name: 'Vanja Krstonosic',
      username: 'foo',
      isAdmin: true,
      isActive: true,
    });
  }

  create(data: ICreateUpdateUserDto) {
    return of<IUser>({
      id: 111,
      username: 'foo',
      name: data.name as string,
      isAdmin: data.isAdmin as boolean,
      isActive: true,
    });
  }

  update(data: ICreateUpdateUserDto) {
    return of<IUser>({
      id: 111,
      username: 'foo',
      name: data.name as string,
      isAdmin: !!data.isAdmin,
      isActive: !!data.isActive,
    });
  }
}
