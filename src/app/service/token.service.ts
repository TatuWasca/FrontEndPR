import { Injectable } from '@angular/core';

const TOKEN_KEY = "AuthToken";
const USERNAME_KEY = "AuthUsername";

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor() { }

  public setToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY)!;
  }

  public setUsername(username: string): void {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }

  public getUsername(): string {
    return sessionStorage.getItem(USERNAME_KEY)!;
  }

  public logOut(): void{
    window.sessionStorage.clear();
  }
}
