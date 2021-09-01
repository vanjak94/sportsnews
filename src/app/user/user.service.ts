import { IUser } from './models/user.model';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICreateUserDto } from './dtos/create-user.dto';
import { IUpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getAll() {
    return of<IUser[]>([
      {
        id: 44,
        name: 'Vanja Krstonosic',
        isAdmin: true,
        isActive: true,
      },
      {
        id: 11,
        name: 'Banja KK',
        isAdmin: true,
        isActive: true,
      },
      {
        id: 33,
        name: 'Aiko Matic',
        isAdmin: true,
        isActive: true,
      },
    ]);
  }

  getById(id: number) {
    return of<IUser>({
      id,
      name: 'Vanja Krstonosic',
      isAdmin: true,
      isActive: true,
    });
  }

  create(data: ICreateUserDto) {
    return of<IUser>({
      id: 111,
      name: data.name,
      isAdmin: data.isAdmin,
      isActive: true,
    });
  }

  update(data: IUpdateUserDto) {
    return of<IUser>({
      id: 111,
      name: data.name as string,
      isAdmin: !!data.isAdmin,
      isActive: !!data.isActive,
    });
  }
}
