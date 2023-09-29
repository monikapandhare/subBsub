import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSubService {
  public userSubject : Subject<string> = new Subject<string>()
  constructor() { }
  
}
