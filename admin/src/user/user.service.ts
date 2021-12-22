import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.model';

@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {

    }

    async addUser(username: string, password: string) {
        return new this.userModel({ username: username, password: password }).save();
    }

    async getAllUsers() {
        return this.userModel.find().exec();
    }
}
