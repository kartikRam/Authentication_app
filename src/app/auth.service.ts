import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }


  registerUser(data: String):Observable<any>{

    return this.http.post('http://localhost:1112/register',data, {

      headers: new HttpHeaders({'Content-Type': 'application/json', 'accept':'*/*'})
    })
  }
  loginUser(data:any):Observable<any>{
    return this.http.post('http://localhost:1112/login',data, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'accept':'*/*'})
    });
  }
}
