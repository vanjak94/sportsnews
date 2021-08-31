import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { ICreateUserDto } from './dtos/create-user.dto';
import { IUpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  getAll() {
    return null
  }

  getById(id: number){
    return
  }

  create(data: ICreateUserDto) {
    //
  }

  update(data: IUpdateUserDto) {
    // TODO: ovo je za tipa deaktivaciju i demotovanje od admina
  }
}
