import { of } from 'rxjs';
import { Router } from '@angular/router';
import { IJwtTokenModel } from './models/jwt-token.model';
import { ILogInDto } from './dtos/log-in.dto';
import { IUser } from './models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../../config';

const TOKEN_KEY = '__token';

const routes = {
  me: `${config.backendUrl}/api/users/me`,
  login: `${config.backendUrl}/api/login`,
};

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

  async logIn(data: ILogInDto) {
    const response = await this.http
      .post<IJwtTokenModel>(routes.login, data)
      .toPromise();
    if (response?.token) {
      localStorage.setItem(TOKEN_KEY, response.token);
      return this.getCurrUser();
    }
    return of(undefined);
  }

  logOut() {
    localStorage.removeItem(TOKEN_KEY);
    this.router.navigateByUrl('/');
    this.currUser = undefined;
  }

  isLoggedIn() {
    return !!this.currUser;
  }

  async getCurrUser() {
    if (!localStorage.getItem(TOKEN_KEY)) {
      this.currUser = undefined;
    } else {
      const currUser = await this.http.get<IUser>(routes.me).toPromise();
      this.currUser = currUser;
    }
    return of(this.currUser);
  }
}
