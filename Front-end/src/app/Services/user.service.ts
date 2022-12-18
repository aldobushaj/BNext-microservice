// List of Authorization Request Headers :
//https://www.loginradius.com/blog/engineering/everything-you-want-to-know-about-authorization-headers/#:~:text=Basic%20Auth%3A,encrypted)%20string%20username%3A%20password.

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {User} from '../Models/user.model';
//import { UserInterface } from '../Models/userInterface.model';

@Injectable({providedIn: 'root'})
export class UserService {
  private apiServerUrl = environment.apiBaseUrl;
  //`${this.apiServerUrl}/users`


  constructor(private http: HttpClient){}

  //RITORNA UN UTENTE, FUNZIONA
  public getUsers(username: string,password: string): Observable<User[]> {
    console.log("Eccomi nella get con url "+`${this.apiServerUrl}/users`);
    //console.log(this.http.get<User[]>(`${this.apiServerUrl}/users`));
    const headers = new HttpHeaders({ Authorization: 'Basic' + btoa(username + ':' + password) });
    return this.http.get<User[]>("http://localhost:8080/users");

    /*return this.http.get<User[]>(
      "http://localhost:8080/users",
      {  headers, responseType: 'text' as 'json' });*/
  }

  //AGGIUNGE UN UTENTE
/*  public addUser(user: UserInterface): Observable<User> {
    return this.http.post<any>(`${this.apiServerUrl}/registration`, user).pipe(map((resp) =>{
      return resp;
    });
  }
*/
  /*public updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiServerUrl}/user/update`, user);
  }*/

  public deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/user/del=${userId}`);
  }




  login(username:string,password:string){
     const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    //console.log("Prova login "+headers)
     //return this.http.get("http://localhost:8080/users",{headers,responseType: 'text' as 'json'})


    return this.http.get("http://localhost:8080/users",{headers ,responseType: 'text' as 'json'})
  }

  createBasicAuthToken(username: String, password: String) {

    return 'Basic ' + window.btoa(username + ":" + password)
  }

}
