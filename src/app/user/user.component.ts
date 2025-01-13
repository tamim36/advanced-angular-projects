import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  @Output() selectedUser = new EventEmitter<string>();

  get userImagePath() {
    return 'assets/users/' + this.avatar;
  }

  onUserClicked(){
    this.selectedUser.emit(this.userId);
  }
}
