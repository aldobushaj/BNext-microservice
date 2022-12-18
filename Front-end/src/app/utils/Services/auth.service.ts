import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Request } from '../Models/request.model';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../Models/user.model';
import { modifiedUser } from '../Models/modifiedUser.model';


@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private baseUrl = 'http://localhost:8080/';

	constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

	signin(request: Request): Observable<any> {
		return this.http.post<any>(this.baseUrl + 'user/signin', request, {headers: new HttpHeaders({ 'Content-Type': 'application/json' })}).pipe(map((resp) => {
			//localStorage.setItem('user', resp.user.username);
			return resp;
		}));
	}

	signup(request: Request): Observable<any> {
		return this.http.post<any>(this.baseUrl + 'user/signup', request, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'}).pipe(map((resp) => {     
			return resp;
		}));
	}

	signout() {
		localStorage.clear();
		this.router.navigateByUrl('signin');
	}

	
	updateUser(user:modifiedUser) {
		return this.http.put<any>(this.baseUrl + 'user/update', user, {headers: new HttpHeaders({ 'Content-Type': 'application/json' })}).pipe(map((resp) => {
			//localStorage.setItem('user', resp.user.username);
			return resp;
		}));

		//localStorage.clear();
		

		//this.router.navigateByUrl('signin');
	}

	delteUser(userId:string) {
		//console.log("provaaaa " +this.baseUrl + 'user/del='+userId)
		return this.http.delete<any>(this.baseUrl + 'user/del='+userId).pipe(map((resp) => {     
			console.log("Ecco la risposta della delete "+resp)                                                    
			return resp;
		}));
		/*return this.http.delete<any>(this.baseUrl + 'user/del='+userId).pipe(map((resp) => {
			//localStorage.setItem('user', resp.user.username);
			localStorage.clear();
			this.router.navigateByUrl('signin');
			return resp;
		}));*/
		
	}

	isUserSignedin() {
		return localStorage.getItem('token') !== null;
	}

	getSignedinUser() {
		return localStorage.getItem('user') as string;
	}

	getToken() {
		let token = localStorage.getItem('token') as string;
		return token;
	}

}
