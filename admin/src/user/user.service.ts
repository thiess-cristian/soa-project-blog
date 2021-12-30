import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.model';

@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {

    }

    async addUser(email: string, password: string, name: string, surname: string): Promise<User> {
        return new this.userModel({ email, password, name, surname }).save();
    }

    async findOne(condition: any): Promise<User> {
        return this.userModel.findOne(condition);
    }

    async getAllUsers() {
        return this.userModel.find().exec();
    }
}
