import { HTTP_INTERCEPTORS } from "@angular/common/http"
import { AuthInterceptor } from "./auth.interceptor"
import { ErrorInterceptor } from "./error.interceptor"

export const httpInterceptor=[
  {provide:HTTP_INTERCEPTORS, useClass:ErrorInterceptor,multi:true},
  {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor,multi:true}

]
