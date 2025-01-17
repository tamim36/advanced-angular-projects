import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";


// type User = {
//   id: string,
//   name: string,
//   avatar: string
// }


@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Output() selectedUser = new EventEmitter<string>();
  @Input({required: true}) isSelected! : boolean;

  get userImagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onUserClicked(){
    this.isSelected = true;
    this.selectedUser.emit(this.user.id);
  }
}
