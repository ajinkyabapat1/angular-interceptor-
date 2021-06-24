import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }
getData(){
  return this.http.get('https://jsonplaceholder.typicode.com/todo/1')
}


getData1(){
  return this.http.get('https://jsonplaceholder.typicode.com/post')
}
showError(err:string){
 console.log('Error Service', err);
}
}
