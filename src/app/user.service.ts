import { Injectable } from '@angular/core';;
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observeble } from 'rxjs/Observable';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  userRegister(userDate): Observable<any> {
    return this.http.post('https://stvadymback.herokuapp.com/api/users/', userDate)
  }
}
