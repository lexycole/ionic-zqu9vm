import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoProvider {

  apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getUsers(){
    return new Promise(resolve=> {
      this.http.get(this.apiUrl + '/todos').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}