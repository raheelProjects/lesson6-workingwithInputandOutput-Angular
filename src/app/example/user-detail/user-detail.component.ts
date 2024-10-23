import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/model/users';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent {
  @Input()
  user!: User;

  @Output()
  anyEvent: EventEmitter<any> = new EventEmitter();

  constructor() {}

  onClick() {
    this.anyEvent.emit(this.user);
  }
}
