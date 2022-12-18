import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../utils/Services/auth.service';
import {Request} from '../../utils/Models/request.model';



@Component({
selector: 'app-signin',
templateUrl: './signin.component.html',
styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

	username: string = '';
	password : string = '';
	isSignedin = false;

	error: string = '';

	constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) {}

	ngOnInit() {
		this.isSignedin = this.authService.isUserSignedin();

		if(this.isSignedin) {
			this.router.navigateByUrl('welcomeHome');
		}
	}

	doSignin() {
		if(this.username !== '' && this.username !== null && this.password !== '' && this.password !== null) {
			const request: Request = { username: this.username, password: this.password};
			// per stamapre l'oggetto con tutti i campi
			this.authService.signin(request).subscribe((result)=> {
				this.router.navigateByUrl('welcomeHome');
				//console.log("Ecco result "+JSON.stringify(result))
				localStorage.setItem('token', 'Bearer ' + result.token);
				localStorage.setItem("user", JSON.stringify(result.user))
				//console.log("Ecco local storage "+JSON.stringify(localStorage.getItem("user")))
			}, () => {
				this.error = 'Either invalid credentials or something went wrong';
			});
		} else {
			this.error = 'Invalid Credentials';
		}
	}

}
