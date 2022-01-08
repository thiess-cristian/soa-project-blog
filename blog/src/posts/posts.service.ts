import { Get, Injectable } from '@nestjs/common';
import { Transport, ClientProxyFactory, ClientOptions, ClientProxy } from "@nestjs/microservices";

@Injectable()
export class PostsService {
    private microservicesOptions: ClientOptions = {
        transport: Transport.TCP,
        options: {
            host: "127.0.0.1",
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
