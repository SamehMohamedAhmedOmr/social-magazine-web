// Angular
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private router: Router, private authService: AuthService) {
	}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		if (!this.authService.isTokenExpired()) {
			return true;
		}
		if (localStorage.getItem('token'))
		{
			this.authService.logout().subscribe(resp => {
			});
		}
		localStorage.removeItem('token');
		localStorage.removeItem('token_expired');
		this.router.navigate(['/login']);
		return false;
	}
}
