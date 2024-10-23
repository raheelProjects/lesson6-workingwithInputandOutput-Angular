import { Component, Input } from '@angular/core';
import { User } from 'src/app/model/users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  printTheEvent($event: any) {
    console.log(typeof $event);
    console.log($event);
    alert(`clicked on user : ${$event.name}`);
  }

  Users: User[] = [
    {
      id: 1,
      name: 'Raheel',
      age: 23,
    },
    {
      id: 2,
      name: 'Hassan',
      age: 25,
    },
    {
      id: 3,
      name: 'Bisham',
      age: 22,
    },
    {
      id: 4,
      name: 'Zaid',
      age: 26,
    },
  ];

  constructor() {}
}
