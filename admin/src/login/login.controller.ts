import { Controller, Body, Post } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {

    constructor(private readonly loginService: LoginService) { }

    @Post()
    login(@Body("username") username: string, @Body("password") password: string) {

        const loginSuccesful = this.loginService.login(username, password);
    }
}
