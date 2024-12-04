import { Controller, Get } from '@nestjs/common';
import { UserService } from '../services/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  // GET /users
  @Get()
  getHello(): { name: string }[] {
    return this.userService.getHello();
  }
}
