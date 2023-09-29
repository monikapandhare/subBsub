import { Component, OnInit } from '@angular/core';
import { UserSubService } from '../../services/user-sub.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss']
})
export class ThreeComponent implements OnInit {
  public username!: string;
  constructor(private _userService:UserSubService) { }

  ngOnInit(): void {
    this._userService.userSubject
      .subscribe(res =>{
        this.username = res;
      })
  }

}
