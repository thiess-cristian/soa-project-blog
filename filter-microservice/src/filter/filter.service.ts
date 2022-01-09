import { Injectable } from '@nestjs/common';
import { ClientOptions, ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { response } from 'express';

const host = process.env.POSTS_MICROSERVICE ? process.env.POSTS_MICROSERVICE : "localhost"

@Injectable()
export class FilterService {

    private microservicesOptions: ClientOptions = {
        transport: Transport.TCP,
        options: {
            host: host,
            port: 3005
        }
    }

    private postMicroserviceProxy: ClientProxy;

    constructor() {
        this.postMicroserviceProxy = ClientProxyFactory.create(this.microservicesOptions);
    }

    async getPostsWithTags(tags: any) {
        /*
        return this.postMicroserviceProxy.send<any>("get_posts", "").toPromise().then(response => {
            response.flatMap(element => element
            )
        });
        */
        return this.postMicroserviceProxy
            .send<any>("get_posts", "")
            .toPromise()
            .then(response => response.filter(element => {
                for (let tag of tags) {
                    if (element.tags.includes(tag)) {
                        return element
                    }
                }
            }));
    }
    async getAllTags() {
        return this.postMicroserviceProxy
            .send<any>("get_posts", "")
            .toPromise()
            .then(response => response.flatMap(element => element.tags));
    }
}
