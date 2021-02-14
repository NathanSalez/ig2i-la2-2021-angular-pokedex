import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {CookieService} from "ngx-cookie-service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private cookies: CookieService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authToken = this.cookies.get("access_token");

    if( !authToken )
      return next.handle(request)

    const authReq = request.clone({
      headers: request.headers.set('Authorization', 'Bearer ' + authToken)
    });

    return next.handle(authReq);
  }
}
