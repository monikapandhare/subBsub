import { Component, OnInit } from '@angular/core';
import { UserSubService } from '../../services/user-sub.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {
  public username!: string;
  constructor(private _userService:UserSubService) { }

  ngOnInit(): void {
    this._userService.userSubject
      .subscribe(res =>{
        this.username = res;
      })
  }

}
