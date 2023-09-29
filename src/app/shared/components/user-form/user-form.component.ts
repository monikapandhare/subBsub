import { Component, OnInit } from '@angular/core';
import { UserSubService } from '../../services/user-sub.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  constructor(private _userService:UserSubService) { }

  ngOnInit(): void {
  }
  onUpdateUsername(name:string){
    console.log(name);
    this._userService.userSubject
      .next(name)
  }

}
