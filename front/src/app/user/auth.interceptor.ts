import { Observable } from 'rxjs';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('__token');

    if (token) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', token),
      });

      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
