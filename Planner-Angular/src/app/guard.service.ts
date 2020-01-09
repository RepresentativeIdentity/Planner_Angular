import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class Guard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        const isLogged = localStorage.getItem('login');
        console.log('Is logged in:', isLogged);
        if (isLogged === 'true') {
            return true;
        } else {
            this.router.navigate(['/login']);
            localStorage.setItem('login', 'false');
            localStorage.removeItem('id');
            localStorage.removeItem('role');
            return false;
        }
    }
}
