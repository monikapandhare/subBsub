import { Component, OnInit } from '@angular/core';
import { Istd } from '../../models/std.interface';
import { StudentSubService } from '../../services/student-sub.service';

@Component({
  selector: 'app-std-details',
  templateUrl: './std-details.component.html',
  styleUrls: ['./std-details.component.scss']
})
export class StdDetailsComponent implements OnInit {
  stdArray : Array<Istd> = [
    {
      fname : "Monika",
      lname : "Vaidya",
      email : "monikapandhare71@gmail.com",
      contact : 1234567890
    }
  ]
  constructor(private _stdSubject : StudentSubService) { }

  ngOnInit(): void {
    // this._stdSubject.stdSub$ // using property as observable
    //   .subscribe(res =>{
    //     this.stdArray.push(res)
        
    //   })
    this._stdSubject.getStdDetails() // using method as observable
      .subscribe(res=>{
        this.stdArray.push(res)
      })
  }

}
