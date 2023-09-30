import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSubService {
  public userSubject : Subject<string> = new Subject<string>()
  //  userSubject: BehaviorSubject<string> = new BehaviorSubject<string>("monika");

  constructor() { }
  
}
