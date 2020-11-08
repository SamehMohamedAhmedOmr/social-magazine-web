import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {UrlName} from '../global/url.name';

@Injectable({
	providedIn: 'root'
})
export class GuestGuard {

	constructor(private router: Router, private authService: AuthService) {
	}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		if (this.authService.isTokenExpired()) {
			return true;
		}
		this.router.navigate([UrlName.home()]);
		return false;
	}

}
