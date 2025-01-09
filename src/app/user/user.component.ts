import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() avatar!: string;
  @Input() name!: string;


  get userImagePath() {
    return 'assets/users/' + this.avatar;
  }

  onUserClicked(){
    console.log('clicked!');
  }
}
