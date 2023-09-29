import { Component, OnInit } from '@angular/core';
import { UserSubService } from '../../services/user-sub.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {
  username!: string;
  constructor(private _userService:UserSubService) { }

  ngOnInit(): void {
    this._userService.userSubject
      .subscribe(res => {
        this.username = res;
      })
  }

}
