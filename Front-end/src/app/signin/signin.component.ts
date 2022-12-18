import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { Request } from '../Models/request.model';


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
			this.router.navigateByUrl('home');
		}
	}

	doSignin() {
		if(this.username !== '' && this.username !== null && this.password !== '' && this.password !== null) {
			const request: Request = { username: this.username, password: this.password};
			// per stamapre l'oggetto con tutti i campi
			this.authService.signin(request).subscribe((result)=> {
				//this.router.navigate(['/home']);
				this.router.navigateByUrl('home');
			}, () => {
				this.error = 'Either invalid credentials or something went wrong';
			});
		} else {
			this.error = 'Invalid Credentials';
		}
	}

}
