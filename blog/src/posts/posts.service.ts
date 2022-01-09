import { Get, Injectable } from '@nestjs/common';
import { Transport, ClientProxyFactory, ClientOptions, ClientProxy } from "@nestjs/microservices";

const host = process.env.POSTS_MICROSERVICE ? process.env.POSTS_MICROSERVICE : "localhost"

@Injectable()
export class PostsService {
    private microservicesOptions: ClientOptions = {
        transport: Transport.TCP,
        options: {
            host: host,
            port: 3005
        }
    }

    private clientProxy: ClientProxy;

    constructor() {
        this.clientProxy = ClientProxyFactory.create(this.microservicesOptions);
    }

    public getPosts() {
        return this.clientProxy.send<any>("get_posts", "");
    }
}
