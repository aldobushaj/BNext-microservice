import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Request } from '../Models/request.model';
import { ActivatedRoute, Router } from '@angular/router';


@Injectable({
	providedIn: 'root'
})
export class AuthService {
	
	private baseUrl = 'http://localhost:8080/';

	constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

	signin(request: Request): Observable<any> {
		return this.http.post<any>(this.baseUrl + 'user/signin', request, {headers: new HttpHeaders({ 'Content-Type': 'application/json' })}).pipe(map((resp) => {
			sessionStorage.setItem('user', request.username);
			sessionStorage.setItem('token', 'Bearer ' + resp.token);
			return resp;
		}));
	}

	signup(request: Request): Observable<any> {
		console.log("Entrato in signup")
		return this.http.post<any>(this.baseUrl + 'user/signup', request, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'}).pipe(map((resp) => {     
			console.log("Ecco la risposta della registrazione "+resp)                                                    
			return resp;
		}));
	}

	signout() {
		sessionStorage.removeItem('user');
		sessionStorage.removeItem('token');

		this.router.navigateByUrl('signin');
	}

	isUserSignedin() {
		return sessionStorage.getItem('token') !== null;
	}

	getSignedinUser() {
		return sessionStorage.getItem('user') as string;
	}

	getToken() {
		let token = sessionStorage.getItem('token') as string;
		return token;
	}

}
