import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getHello(): { name: string }[] {
    return [{ name: 'John' }, { name: 'Jane' }];
  }
}
