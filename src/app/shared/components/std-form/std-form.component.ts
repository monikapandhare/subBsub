import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentSubService } from '../../services/student-sub.service';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {
  stdSignForm !: FormGroup;
  constructor(private _stdSubject : StudentSubService) { }

  ngOnInit(): void {
    this.stdSignForm = new FormGroup({
      fname: new FormControl(null,[Validators.required]),
      lname : new FormControl (null,[Validators.required]),
      email : new FormControl(null,[Validators.required]),
      contact : new FormControl(null,[Validators.required]),

    });
  }
  onSignUp(){
    if(this.stdSignForm.valid){
      let obj = this.stdSignForm.value;
      console.log(obj);
      this._stdSubject.sendStdDetails(obj)
      this.stdSignForm.reset()
      
    }
  }

}
