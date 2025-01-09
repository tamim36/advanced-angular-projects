import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../data/dummy-users';

const randomIdx = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomIdx]);
  userImagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);


  // get userImagePath() {
  //   return 'assets/users/' + this.selectedUser().avatar;
  // }

  onUserClicked(){
    const randomIdx = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIdx]);
  }
}
