import { Component } from '@angular/core';
import {UserService} from "./user/user.service";
import {IUser} from "./user/IUser";

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  providers: [UserService]
})

export class AppComponent  {
  appTitle = 'Expertzlab';

  users = {};

  constructor(private userService: UserService){
  }

  ngOnInit():void{
    this.userService.getUsers().subscribe(
     v => this.users = v
    )
  }

}
