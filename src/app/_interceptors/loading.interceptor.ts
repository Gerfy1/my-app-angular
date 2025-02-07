import { HttpEvent, HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OcupadoService } from '../_services/ocupado.service';
import { delay, finalize, Observable } from 'rxjs';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor{

  constructor(private ocupado: OcupadoService){}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>{
    this.ocupado.ocupado();
    return next.handle(req).pipe(
      delay(1000),
      finalize(() => {
        this.ocupado.desocupado();
      })
    )
  }
}
