import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  apiUrl = 'https://wtg-apidayssanfrancisco.sandbox.auth0-extend.com/pwa';
  notTodo: string;
  notTodos: any;

  constructor(private http: HttpClient) {
    this.getNotTodos();
   }

  getNotTodos() {
    this.http.get(this.apiUrl).subscribe((data) => {
      this.notTodos = data;
      console.log(this.notTodos);
    });
  }

  addNotTodo(){
    this.http.post(this.apiUrl, {item: this.notTodo}).subscribe((data) => {
      this.notTodo = '';
      this.getNotTodos();

      alert('Success');
    });
  }

  cancelNotTodo(){
    this.notTodo = '';
  }
}
