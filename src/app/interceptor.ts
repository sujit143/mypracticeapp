import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';



export class Interceptor implements HttpInterceptor{
intercept(req :HttpRequest<any>,next: HttpHandler){
 const httpreq=req.clone({
  headers: req.headers.set("Content-Type", "application/json")
 });
console.log("interceptor enabled");
    return next.handle(httpreq);
  }
}
