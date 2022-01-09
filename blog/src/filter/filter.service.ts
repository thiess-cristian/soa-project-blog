import { Injectable } from '@nestjs/common';
import { ClientOptions, ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

const host = process.env.FILTER_MICROSERVICE ? process.env.POSTS_MICROSERVICE : "localhost";
@Injectable()
export class FilterService {


    private microservicesOptions: ClientOptions = {
        transport: Transport.TCP,
        options: {
            host: host,
            port: 3006
        }
    }

    private filterProxy: ClientProxy;

    constructor() {
        this.filterProxy = ClientProxyFactory.create(this.microservicesOptions);
    }

    getPosts(tags: string[]) {
        return this.filterProxy.send("get_posts", tags);
    }
    async getTags() {
        console.log("gettags micro")
        return this.filterProxy.send("get_tags", "");
    }
}
