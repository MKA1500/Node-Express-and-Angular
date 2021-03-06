import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId);
  }
  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  getServers() {
    return this.http.get('http://localhost:3000/api/servers/');
  }
  // postServer() {
  //   return this.http.post('http://localhost:3000/api/servers/');
  // }
}
