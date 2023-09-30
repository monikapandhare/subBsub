import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Istd } from '../models/std.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentSubService {
  private stdSubject : Subject<Istd> = new Subject<Istd>() // used as a observer and as a observable
  stdSub$ = this.stdSubject.asObservable()
  constructor() { }
  public sendStdDetails(obj : Istd){
    this.stdSubject.next(obj)
  }
  getStdDetails():Observable<Istd>{
    return this.stdSubject.asObservable()
  }
}
