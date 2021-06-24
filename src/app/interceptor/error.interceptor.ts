import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {catchError} from 'rxjs/operators'
import {throwError} from 'rxjs'
import { RestService } from '../rest.service';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private ser:RestService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(err=>{
        let msg="";
        console.log(err);
        this.ser.showError(err);

        return throwError(err.message)
      })
    )
  }
}
