import { Router } from '@angular/router';
import { IJwtTokenModel } from './models/jwt-token.model';
import { ILogInDto } from './dtos/log-in.dto';
import { IUser } from './models/user.model';
import { of, Observable, Subject } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const TOKEN_KEY = '__token';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {
    this.getCurrUser();
  }

  private _currUser: IUser | undefined;
  public get currUser() {
    return this._currUser;
  }
  private set currUser(newUser) {
    this._currUser = newUser;
  }

  logIn(data: ILogInDto) {
    // TODO: zahtev ka bekendu za token
    localStorage.setItem(TOKEN_KEY, 'faketoken');
    return this.getCurrUser();
  }

  logOut() {
    localStorage.removeItem(TOKEN_KEY);
    this.router.navigateByUrl('/');
    this.currUser = undefined;
  }

  isLoggedIn() {
    return !!this.currUser;
  }

  getCurrUser(): Observable<IUser | undefined> {
    if (localStorage.getItem('token')) {
      this.currUser = undefined;
      return of(undefined);
    } else {
      this.currUser = {
        id: 44,
        name: 'Vanja Krstonosic',
        isAdmin: true,
        isActive: true,
      };
      return of(this.currUser);
    }
  }
}
