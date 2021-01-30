import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {UrlName} from '../global/url.name';
import {AuthService} from '../services/User-Module/auth.service';

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
