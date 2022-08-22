import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from './User';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      username: 'omer',
      password: 'omer',
    },
    {
      username: 'fatih',
      password: 'fatih',
    },
    {
      username: 'ali',
      password: 'ali',
    },
  ];

  getUsers() {
    //    return this.users.map((user) => plainToClass(SerializedUser, user));
    // bu yontem interceptor istemiyor, ama onerilmiyor da

    return this.users.map((user) => new SerializedUser(user));
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
