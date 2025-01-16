import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type User } from './user.model';


// type User = {
//   id: string,
//   name: string,
//   avatar: string
// }


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  
  @Output() selectedUser = new EventEmitter<string>();

  get userImagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onUserClicked(){
    this.selectedUser.emit(this.user.id);
  }
}
