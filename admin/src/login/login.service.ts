import { Body, Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {

    login(username: string, password: string) {

        return true;
    }
}
