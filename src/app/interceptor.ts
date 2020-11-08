import {Injectable} from '@angular/core';
import {
	HttpInterceptor,
	HttpHandler,
	HttpRequest,
	HttpEvent, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators';
import {UrlName} from './core/global/url.name';

@Injectable()
export class Interceptor implements HttpInterceptor {

	constructor(private router: Router) {
	}

	intercept(
		req: HttpRequest<any>,
		next: HttpHandler,
	): Observable<HttpEvent<any>> {

		let token = localStorage.getItem('token');

		let header_languages = req.headers.get('Accept-Language');

		if (token) {
			let apiReq = null;
			if (header_languages){
				apiReq = req.clone({
					setHeaders: {
						'Authorization': 'Bearer ' + token,
					},
				});
			}
			else{
				apiReq = req.clone({
					setHeaders: {
						'Accept-Language': localStorage.getItem('lang'),
						'Authorization': 'Bearer ' + token,
					},
				});
			}

			return next.handle(apiReq).pipe(
				catchError((error: HttpErrorResponse) => {
					if (!(error.error instanceof ErrorEvent)) { // server side
						this.handleError(error);
					}

					return throwError(error);
				})
			);
		}

		const apiReq = req.clone({
			setHeaders: {
				'Accept-Language': localStorage.getItem('lang'),
			},
		});

		return next.handle(apiReq).pipe(
			catchError((error: HttpErrorResponse) => {
				if (!(error.error instanceof ErrorEvent)) { // server side
					this.handleError(error);
				}
				return throwError(error);
			})
		);
	}

	public handleError(error) {
		let url = this.router.url;
		if (error.status == 402 || error.status == 401) { // payment for tenants or Unauthenticated
			localStorage.removeItem('token');
			if (!(url == '/login')) {
				this.router.navigate(['login']).then();
			}
		}

		if (error.status == 403) { // unauthorized
			if (!(url == '/' || url == '/' + UrlName.home())) {
				this.router.navigate([UrlName.home()]).then();
			}
		}
	}

}
