import { BadRequestException, Body, Controller, Post, Get, Req, Res, UnauthorizedException } from '@nestjs/common';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from "@nestjs/jwt";
import { Response, Request } from 'express';

@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService, private jwtService: JwtService) { }

    @Post('register')
    async addUser(
        @Body("email") email: string,
        @Body("password") password: string,
        @Body("name") name: string,
        @Body("surname") surname: string,
    ) {
        try {
            const hashedPassword = await bcrypt.hash(password, 12);
            const user = await this.userService.addUser(email, hashedPassword, name, surname);

            delete user.password;

            return user;
        } catch (e) {
            return {
                message: "invalid email"
            }
        }
    }

    @Post("login")
    async login(
        @Body("email") email: string,
        @Body("password") password: string,
        @Res({ passthrough: true }) response: Response) {
        const user = await this.userService.findOne({ email });

        if (!user) {
            throw new BadRequestException('invalid email');
        }
        if (!await bcrypt.compare(password, user.password)) {
            throw new BadRequestException(`invalid credentials`);
        }

        const jwt = await this.jwtService.signAsync({ id: user.id });

        response.cookie('jwt', jwt, { httpOnly: true });

        return {
            message: 'success'
        };
    }

    @Post('logout')
    async logout(@Res({ passthrough: true }) response: Response) {
        response.clearCookie('jwt');
        return {
            message: 'success'
        }
    }

    @Get()
    async getAllUsers(@Req() request: Request) {

        console.log("users")

        try {
            const cookie = request.cookies['jwt'];

            console.log(cookie)

            const data = await this.jwtService.verifyAsync(cookie);

            console.log(data)

            if (!data) {
                throw new UnauthorizedException("no cookie");
            }

            return this.userService.getAllUsers();
        } catch (e) {
            return e;
        }
    }
}
