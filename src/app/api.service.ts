import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL='http://localhost:3000/user/';
  constructor(private http:HttpClient) { }

  getallusers(){
    return this.http.get(this.apiURL);
  }

  createusers(data){
    return this.http.post(this.apiURL,data);
  }
}
