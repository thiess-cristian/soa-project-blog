import { Body, Controller, Post, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {

    constructor(private userService: UserService) { }

    @Post()
    addUser(@Body("username") username: string, @Body("password") password: string) {
        this.userService.addUser(username, password);
    }

    @Get()
    getAllUsers() {
        return this.userService.getAllUsers();
    }
}
