import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AuthModel} from '../../models/User-Module/Auth.model';
import {AuthSerializer} from '../../Serializers/User-Module/Auth.serializer';
import jwt_decode from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})
// @ts-ignore
export class AuthService {

    private http: HttpClient;
    private url: string;
    private endpoint: string;
    private serializer: AuthSerializer;

    constructor(Http: HttpClient) {
        this.http = Http;
        this.url = environment.url();
        this.serializer = new AuthSerializer();
    }

    public register(item: AuthModel): Observable<AuthModel> {
        this.endpoint = 'users/register';
        return this.http
            .post<AuthModel>(`${this.url}${this.endpoint}`, this.serializer.toJson(item))
            .pipe(map(data => this.serializer.fromJson(data) as AuthModel));
    }

    public login(item: AuthModel): Observable<AuthModel> {
        this.endpoint = 'users/login';
        return this.http
            .post<AuthModel>(`${this.url}${this.endpoint}`, this.serializer.toJson(item))
            .pipe(map(data => this.serializer.fromJson(data) as AuthModel));
    }

    // check if token is expired or not
    isTokenExpired() {
        let token = this.getToken();
        if (token == null) {
            return true;
        }
        const date = this.getTokenExpirationDate(token);
        if (date === undefined || date === null) {
            return true;
        }
        return (date.valueOf() < new Date().valueOf());
    }

    // logout Function
    logout(): Observable<any> {
        return this.http.post<AuthModel>(environment.url() + 'users/logout', {});
    }

    // get token expiration Date
    getTokenExpirationDate(token: string): Date {
        const decoded = jwt_decode(token);
        // @ts-ignore
        if (decoded.exp === undefined) {
            return null;
        }
        const date = new Date(0);
        // @ts-ignore
        date.setUTCSeconds(decoded.exp);
        return date;
    }

    // getter and setter token
    getToken(): string {
        return localStorage.getItem('token');
    }

    setToken(token: string): void {
        localStorage.setItem('token', token);
    }

}
